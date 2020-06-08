import React from "react";
import {
  Image,
  TextContainer,
  DeleteButtonFav
} from "../styles/styles_Favourites";
import { deleteFavourite } from "../fetch_data/favourites"

import { OneFavourite } from "../styles/styles_Favourites"

export const FavouriteCard = ({ favourites }) => {
  const favs = favourites.map(favourite => {
    return (
      <OneFavourite>
        <Image src={favourite.image} />
       
        <TextContainer>
          <h3>{favourite.title}</h3>
        </TextContainer>
       
        <DeleteButtonFav onClick={() => deleteFavourite(favourite._id)}>
          Delete
          <span role="img" aria-labelledby="delete image">×</span>
        </DeleteButtonFav>
      
      </OneFavourite>
    )
  })

  return <>{favs}</>
}