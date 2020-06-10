import React from "react"
import { useSelector } from "react-redux"

import { PlusButton } from "../styles/styles_Welcome"
import { addFavourite } from "../fetch_data/favourites"

export const AddFavourite = ({ title, image, favouriteId }) => {
  const name = useSelector(store => store.auth.name)
  const recipe = { title, image, favouriteId, name }

  return (
    <>
      <PlusButton role="img" onClick={() => addFavourite(recipe)}>
      <span role="img" aria-labelledby="heart">➕</span>
      </PlusButton>
    </>
  )
}