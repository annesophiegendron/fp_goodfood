import React from "react"
import moment from "moment"

import { Container, TopContainer, BottomContainer, Paragraph } from "../styles/styles_ReviewCard"

import { handleDelete } from "../fetch_data/reviews"

import { DeleteButton } from "../styles/styles_global"

export const ReviewCard = props => {
  const { reviews } = props

  const comments = reviews.map(review => {
    return (
      <Container>
        <TopContainer>
          <div>
            <Paragraph>
              {review.title}
              {moment(review.createdAt).fromNow()}
            </Paragraph>
            <BottomContainer>{review.review}</BottomContainer>
          </div>
          <DeleteButton onClick={() => handleDelete(review._id)}>
            Delete <span role="img">×</span>
          </DeleteButton>
        </TopContainer>
        
      </Container>
    )
  })
  return <>{comments}</>
}