import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"

import { Container, Header, ButtonContainer, ClearButton, MainTitle, CardContainer } from "../styles/styles_global"
import { Logout } from "../components/Logout"
import { FavouriteCard } from "../components/FavouriteCard"

import { getFavourites } from "../fetch_data/favourites"
import { ErrorButton, ErrorContainer } from "../styles/styles_error"

export const Favourites = () => {
  const [favourites, setFavourites] = useState([])
  const history = useHistory()

  const name = useSelector(store => store.auth.name)
  const loggedIn = useSelector(store => store.auth.loggedIn)

  useEffect(() => {
    getFavourites(name, setFavourites)
  }, [name])

  return (
    <Container>
      {loggedIn && (
        <>
          <Header>
            <ButtonContainer>
              <Logout></Logout>
              <ClearButton onClick={() => history.goBack()}>back</ClearButton>
            </ButtonContainer>
          </Header>
          <MainTitle>
            Your favourites recipes
          </MainTitle>
          <CardContainer>
            <FavouriteCard favourites={favourites}></FavouriteCard>
          </CardContainer>
        </>
      )}
      
      {!loggedIn && (
        <ErrorContainer>
          Access denied.
          <ErrorButton onClick={() => history.push("/")}>
            Back to Main Page
          </ErrorButton>
        </ErrorContainer>
      )}
    </Container>
  )
}