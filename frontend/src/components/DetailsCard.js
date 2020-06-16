import React from "react"

import pomegranate from "../assets/images/pomegranate.jpg"

import { CardWrapper, Container, Image, DescriptionContainer, Title, Label, Text, Link } from "../styles/styles_DetailsCard"

export const DetailsCard = ({ image, title, description, time, serving, sourceUrl, ingredient }) => {

  return (
    <CardWrapper>
      <Container>
        <Image src={image === undefined ? pomegranate : `${image}`} />
        <DescriptionContainer>
          <Title>{title === undefined ? null : title}</Title>
          <Label>Preparation:</Label>
          <Text>{description}</Text>
          <Label>Ingredients:</Label>
          <Text>{ingredient}</Text>
          <Label>Time preparation:</Label>
          <Text>{time}'</Text>
          <Label>Portion(s)</Label>
         <Text>{serving}</Text>
         <Link href={sourceUrl} target="_blank">More details</Link>
      </DescriptionContainer>
      </Container>
      </CardWrapper>
  )
}