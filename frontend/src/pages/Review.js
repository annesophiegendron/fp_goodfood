import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import { ReviewCard } from "../components/ReviewCard"
import { Logout } from "../components/Logout"
import { Footer } from '../components/Footer'
import { AccessError } from '../components/AccessError'

import { UserContainer } from "../styles/styles_Review"
import { Container, ClearButton, Header, ButtonContainer, MainTitle } from "../styles/styles_global"

import { getReviews } from "../fetch_data/reviews"

export const Review = () => {
  const [reviews, setReviews] = useState([])
  const history = useHistory()

  const name = useSelector(store => store.auth.name)
  const loggedIn = useSelector(store => store.auth.loggedIn)

  useEffect(() => {
    getReviews(name, setReviews)
  }, [name])
  
  return (
    <>
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
            <UserContainer>{name}'s profile</UserContainer>
          </Header>
          <MainTitle>
            Your reviews
          </MainTitle>
          <ReviewCard reviews={reviews}></ReviewCard>
        </>
      )}

        {!loggedIn && (
          <AccessError />
      )}

      </Container>
      <Footer />
      </>
  )
}