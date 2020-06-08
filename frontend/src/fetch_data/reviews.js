// GET REVIEWS FOR UNIQUE USER
export const getReviews = (name, setReviews) => {
  fetch(`https://goodfood-annesophie.herokuapp.com/profile?username=${name}`, {
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
  fetch(`https://goodfood-annesophie.herokuapp.com/${reviewId}`, {
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
  fetch(`https://goodfood-annesophie.herokuapp.com/review?recipeId=${recipeId}`)
    .then(res => res.json())
    .then(json => {
      setReviews(json)
    })
}

// ADD REVIEW TO RECIPE 
export const addReview = (recipe, setReviews, setUserReview, reviews, event) => {
  event.preventDefault();
  fetch(`https://goodfood-annesophie.herokuapp.com/review`, {
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