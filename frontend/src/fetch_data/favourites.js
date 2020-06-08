export const addFavourite = recipe => {
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

export const deleteFavourite = favouriteId => {
  fetch(`http://localhost:8080/fav/${favouriteId}`, {
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

export const getFavourites = (name, setFavourites) => {
  fetch(`http://localhost:8080/like?username=${name}`)
    .then(res => res.json())
    .then(json => {
      setFavourites(json);
      console.log(json);
    })
}