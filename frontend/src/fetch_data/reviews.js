export const getReviews = (name, setReviews) => {
  fetch(`http://localhost:8080/profile?username=${name}`)
    .then(res => res.json())
    .then(json => {
      setReviews(json);
    });
};

export const handleDelete = reviewId => {
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
    });
};

export const fetchReviews = (recipeId, setReviews) => {
  fetch(`http://localhost:8080/review?recipeId=${recipeId}`)
    .then(res => res.json())
    .then(json => {
      setReviews(json);
    });
};

// const URL = "http://localhost:8080/like";
export const addReview = (recipe, setReviews, setUserReview, reviews, event) => {
  event.preventDefault();
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
    })
  })
    .then(res => res.json())
    .then(json => {
      console.log(json);
      const newReviews = [...reviews, json];
      setReviews(
        newReviews.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
      );
      setUserReview("");
    });
};