import React from "react"
import { useSelector } from "react-redux"

import { addReview } from "../fetch_data/reviews"

import { ButtonReview } from "../styles/styles_Details"

export const AddReview = ({ title, description, setReviews, setUserReview, reviews, recipeId, authors, userReview }) => {
  
  const name = useSelector(store => store.auth.name);

  const recipe = { userReview, recipeId, description, authors, title, name }
  return (
    <>
      <ButtonReview
        onClick={event =>
          addReview(recipe, setReviews, setUserReview, reviews, event)
        }
      >
        Submit review
      </ButtonReview>
    </>
  )
}