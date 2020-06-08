import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcrypt-nodejs";

import { User } from "./models/User"
import { Review } from "./models/Review"
import { Like } from "./models/Like"

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/goodfood";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

// PORT=9000 npm start
const port = process.env.PORT || 8080
const app = express()

// Middlewares to enable cors and json body parsing
app.use(cors())
app.use(bodyParser.json())

//ROUTES
app.get("/", (req, res) => {
  res.send("goodfood project - anne-sophie gendron @2020")
})

// =================================================================
//                           POST
// =================================================================

// REGISTER USER
app.post("/users", async (req, res) => {
  try {
    const { name, password, email } = req.body
    const user = new User({ name, email, password: bcrypt.hashSync(password) })
    await user.save()
    res
      .status(201)
      .json({ id: user._id, accessToken: user.accessToken, name: user.name })
    console.log({ user })
  } catch (err) {
    res.status(400).json({
      message: "Cannot create user. Please try again!",
      errors: err.errors
    })
  }
})

// LOGIN USER
app.post("/sessions", async (req, res) => {
  const user = await User.findOne({ email: req.body.email })

  if (user && bcrypt.compareSync(req.body.password, user.password)) {
    res.status(201).json({
      userId: user._id,
      accessToken: user.accessToken,
      name: user.name,
      loggedIn: true
    });
  } else {
    res.status(403).json({ message: "User not found, access denied" })
  }
})

// ADD USER REVIEW
app.post("/review", async (req, res) => {
  try {
    const review = new Review({
      review: req.body.review,
      id: req.body.id,
      recipeId: req.body.recipeId,
      title: req.body.title,
      description: req.body.description,
      authorName: req.body.authorName
    });
    await review.save()
    res.json(review)
  } catch (err) {
    res
      .status(400)
      .json({ errors: err.errors, comment: "Cannot add new comment" })
  }
})

//ADD TO FAVOURITES
app.post("/like", async (req, res) => {
  try {
    const like = new Like({
      id: req.body.id,
      title: req.body.title,
      username: req.body.username,
      image: req.body.image,
    })
    await like.save()
    res.json(like)
  } catch (err) {
    res
      .status(400)
      .json({ errors: err.errors, comment: "Cannot add to favourites" })
  }
})


// =================================================================
//                            GET
// =================================================================

// SHOW REVIEWS (UNIQUE USER)
app.get("/profile", async (req, res) => {
  const username = req.query.username
  console.log(username)
  Review.find({ authorName: username }, (err, reviews) => {
    if (err) {
      console.log(err);
      res.status(404).json({ error: "Not found" })
    } else {
      res.json(reviews)
    }
  }).sort({ createdAt: "desc" })
})

//SHOW REVIEWS (UNIQUE RECIPE)
app.get("/review", async (req, res) => {
  const recipeId = req.query.recipeId
  Review.find({ id: recipeId }, (err, reviews) => {
    if (err) {
      console.log(err)
      res.status(404).json({ error: "Not found" })
    } else {
      res.json(reviews)
    }
  }).sort({ createdAt: "desc" })
})

//SHOW FAVOURITE RECIPES FOR SPECIFIC USER
app.get("/like", async (req, res) => {
  const username = req.query.username
  Like.find({ username: username }, (err, reviews) => {
    if (err) {
      console.log(err)
      res.status(404).json({ error: "Not found" })
    } else {
      res.json(reviews)
    }
  }).sort({ createdAt: "desc" })
})

// =================================================================
//                            DELETE ROUTES
// =================================================================

//DELETE A REVIEW
app.delete("/:reviewId", async (req, res) => {
  const { reviewId } = req.params
  try {
    const remove = await Review.findByIdAndDelete(reviewId)
    remove.save()
    res.status(201).json(remove)
  } catch (err) {
    res.status(400).json({
      message: "Cannot delete",
      errors: err.errors
    })
  }
})

//DELETE A FAVOURITE
app.delete("/favourites/:favouriteId", async (req, res) => {
  const { favouriteId } = req.params;

  await Like.findByIdAndDelete(favouriteId, (err, favs) => {
    if (err) {
      console.log(err);
      res.status(404).json({ error: "Not deleted" });
    } else {
      res.json(favs);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});