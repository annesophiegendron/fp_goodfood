import React from "react"
import pomegranate from "../assets/images/pomegranate.jpg"

import { Container, Image, DescriptionContainer, Title, Label, Text } from "../styles/styles_DetailsCard"

export const DetailsCard = ({ image, title, description, time, serving, diet, ingredient }) => {
  return (
    <Container>
      <Image src={image === undefined ? pomegranate : `${image}`} />
      <DescriptionContainer>
        <Title>{title === undefined ? null : title}</Title>
        <Label>Diets</Label>
        <Text>{diet}</Text>
        <Label>Preparation:</Label>
        <Text>{description}</Text>
        <Label>Ingredients:</Label>
        <Text>{ingredient}</Text>
        <Label>Time preparation:</Label>
        <Text>{time}'</Text>
        <Label>Portion(s)</Label>
        <Text>{serving}</Text>
      </DescriptionContainer>
    </Container>
  )
}