import React from "react"
import { useSelector } from "react-redux"

import { AddButton } from "../styles/styles_Welcome"
import { addFavourite } from "../fetch_data/favourites"

export const AddFavourite = ({ title, image, favouriteId }) => {
  const name = useSelector(store => store.auth.name)
  const recipe = { title, image, favouriteId, name }

  return (
    <>
      <AddButton onClick={() => addFavourite(recipe)}>Love it
      <span role="img" aria-labelledby="heart">❤︎</span>
      </AddButton>
    </>
  )
}