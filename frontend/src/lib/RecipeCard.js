import React from "react"
import fruits from "../assets/images/fruits.jpg"
import { Image, DetailsContainer } from "../styles/styles_Welcome"

export const RecipeCard = ({ image, title }) => {
  return (
    <>
      <Image src={image === undefined ? fruits : `${image}`} />
      <DetailsContainer>
        <h3>{title}</h3>
      </DetailsContainer>
    </>
  )
}