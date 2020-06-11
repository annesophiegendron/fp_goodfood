import React from "react"
import pomegranate from "../assets/images/pomegranate.jpg"

import { Container, Image, DescriptionContainer, Title, Label, Text } from "../styles/styles_DetailsCard"

export const DetailsCard = ({ image, title, description, time }) => {
  return (
    <Container>
      <Image src={image === undefined ? pomegranate : `${image}`} />
      <DescriptionContainer>
        <Title>{title === undefined ? null : title}</Title>
        <Label>Preparation:</Label>
        <Text>{description}</Text>
        <Label>Ingredients:</Label>
        <Text>{time}</Text>
        <Label>Time preparation:</Label>
      </DescriptionContainer>
    </Container>
  )
}