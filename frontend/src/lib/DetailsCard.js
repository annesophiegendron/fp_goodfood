import React from "react"
import pomegranate from "../assets/images/pomegranate.jpg"

import { Container, Image, DescriptionContainer, Title, Label, Text } from "../styles/styles_DetailsCard"

export const DetailsCard = ({ image, title, description }) => {
  return (
    <Container>
      <Image src={image === undefined ? pomegranate : `${image.thumbnail}`} />
      <DescriptionContainer>
        <Title>{title === undefined ? null : title}</Title>
        <Label>Description:</Label>
        <Text>{description}</Text>
      </DescriptionContainer>
    </Container>
  )
}