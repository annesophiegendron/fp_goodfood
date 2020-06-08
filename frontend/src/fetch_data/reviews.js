// GET REVIEWS FOR UNIQUE USER

export const getReviews = (name, setReviews) => {
  // fetch(`https://goodfood-annesophie.herokuapp.com/profile?username=${name}`, {
    fetch(`http://localhost:8080/profile?username=${name}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(json => {
      setReviews(json);
    })
}

// HANDLE DELETE REVIEW 

export const handleDelete = reviewId => {
  // fetch(`https://goodfood-annesophie.herokuapp.com/${reviewId}`, {
    fetch(`http://localhost:8080/${reviewId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(() => {
      window.location.reload();
    })
}

// GET REVIEWS FOR ONE RECIPE ITEM

export const fetchReviews = (recipeId, setReviews) => {
  // fetch(`https://goodfood-annesophie.herokuapp.com/review?recipeId=${recipeId}`)
  fetch(`http://localhost:8080/review?recipeId=${recipeId}`)
    .then(res => res.json())
    .then(json => {
      setReviews(json)
    })
}

// ADD REVIEW TO RECIPE 

export const addReview = (recipe, setReviews, setUserReview, reviews, event) => {
  event.preventDefault();
  // fetch(`https://goodfood-annesophie.herokuapp.com/review`, {
    fetch(`http://localhost:8080/review`, {

    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      review: recipe.userReview,
      id: recipe.recipeId,
      description: recipe.description,
      title: recipe.title,
      authors: recipe.authors,
      authorName: recipe.name
    })
  })
    .then(res => res.json())
    .then(json => {
      console.log(json);
      const newReviews = [...reviews, json]
      setReviews(
        newReviews.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
      )
      setUserReview("")
    })
}