import React from "react"
import { useSelector } from "react-redux"

import { addFavourite } from "../fetch_data/favourites"

import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import StarBorderIcon from '@material-ui/icons/StarBorder'

export const AddFavourite = ({ title, image, favouriteId }) => {
  const name = useSelector(store => store.auth.name)
  const recipe = { title, image, favouriteId, name }
  return (
    <>
     <IconButton aria-label={`star ${recipe.title}`} onClick={() => addFavourite(recipe)}>
                          <StarBorderIcon />
                        </IconButton>
    </>
  )
}
