// ADD ITEM TO FAVOURITES

export const addFavourite = recipe => {
  // fetch(`https://goodfood-annesophie.herokuapp.com/like`, {
    fetch(`http://localhost:8080/like`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: recipe.favouriteId,
      title: recipe.title,
      image: recipe.image,
      username: recipe.name,
    })
  })
    .then(res => res.json())
    .then(json => {
      console.log(json);
    })
  alert("The recipe is added to your favourites!")
}

// REMOVE ITEM FROM FAVOURITES

export const deleteFavourite = favouriteId => {
  // fetch(`https://goodfood-annesophie.herokuapp.com/favourites/${favouriteId}`, {
    fetch(`http://localhost:8080/${favouriteId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(() => {
      window.location.reload()
    })
}

// GET FAVOURITE ITEMS FOR UNIQUE USER

export const getFavourites = (name, setFavourites) => {
  fetch(`https://goodfood-annesophie.herokuapp.com/like?username=${name}`)
    .then(res => res.json())
    .then(json => {
      setFavourites(json);
      console.log(json);
    })
}