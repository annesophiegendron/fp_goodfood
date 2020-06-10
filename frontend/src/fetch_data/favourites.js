import { URL_ROOT } from '../fetch_data/constants'
import swal from 'sweetalert'

// ADD ITEM TO FAVOURITES

export const addFavourite = recipe => {
    fetch(URL_ROOT+`like`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: recipe.favouriteId,
      title: recipe.title,
      authors: recipe.authors,
      image: recipe.image,
      username: recipe.name,
    })
  })
    .then(res => res.json())
    .then(json => {
      console.log(json);
    })
  swal({
      text: "The recipe has successfully been added to your favourites!",
      icon: "success",
    });
}

// REMOVE ITEM FROM FAVOURITES
//
export const deleteFavourite = favouriteId => {
  fetch(URL_ROOT + `favourites/${favouriteId}`, {
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
  fetch(URL_ROOT+`like?username=${name}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(json => {
      setFavourites(json);
      console.log(json);
    })
}