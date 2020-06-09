import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import { ReviewCard } from "../components/ReviewCard"
import { Logout } from "../components/Logout"

import { ErrorButton, ErrorContainer } from "../styles/styles_error"

import { UserContainer } from "../styles/styles_Review"
import { Container, ClearButton, Header, ButtonContainer, MainTitle } from "../styles/styles_global"

import { getReviews } from "../fetch_data/reviews"

export const Review = () => {
  const [reviews, setReviews] = useState([])

  const name = useSelector(store => store.auth.name)
  const loggedIn = useSelector(store => store.auth.loggedIn)

  const history = useHistory()

  useEffect(() => {
    getReviews(name, setReviews)
  }, [name])
  
  return (
    <Container>
      
      {loggedIn && (
        <>
          <Header>
            <ButtonContainer>
              <Logout></Logout>
              <ClearButton onClick={() => history.push("/favourites")}>
                favourites
              </ClearButton>
              <ClearButton onClick={() => history.goBack()}>back</ClearButton>
            </ButtonContainer>
            <UserContainer>logged account: {name}</UserContainer>
          </Header>
          <MainTitle>
            Your reviews
          </MainTitle>
          <ReviewCard reviews={reviews}></ReviewCard>
        </>
      )}

      {!loggedIn && (
        <ErrorContainer>
          Access denied.
          <ErrorButton onClick={() => history.push("/")}>
            back to main page
          </ErrorButton>
        </ErrorContainer>
      )}

    </Container>
  )
}