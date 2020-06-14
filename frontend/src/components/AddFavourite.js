import React from "react"
import { useSelector } from "react-redux"

import { addFavourite } from "../fetch_data/favourites"

import IconButton from '@material-ui/core/IconButton'
import StarRateTwoToneIcon from '@material-ui/icons/StarRateTwoTone'

export const AddFavourite = ({ title, image, favouriteId }) => {
  const name = useSelector(store => store.auth.name)
  const recipe = { title, image, favouriteId, name }
  return (
     <IconButton aria-label={`star ${recipe.title}`} onClick={() => addFavourite(recipe)}>
        <StarRateTwoToneIcon />
      </IconButton>
  )
}
