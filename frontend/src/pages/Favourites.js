import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"

import { Container, Header, ButtonContainer, ClearButton, MainTitle, CardContainer } from "../styles/styles_global"
import { Logout } from "../components/Logout"
import { ImageGridList } from '../components/FavouritesGridList'

import { Footer } from '../components/Footer'
import { AccessError } from '../components/AccessError'

import { getFavourites } from "../fetch_data/favourites"

export const Favourites = () => {
  const [favourites, setFavourites] = useState([])
  const history = useHistory()

  const name = useSelector(store => store.auth.name)
  const loggedIn = useSelector(store => store.auth.loggedIn)
 
  useEffect(() => {
    getFavourites(name, setFavourites)
  }, [name])

  return (
    <>
    <Container>

      {loggedIn && (
        <>
          <Header>
            <ButtonContainer>
              <Logout></Logout>
              <ClearButton onClick={() => history.push("/review")}>
                reviews
              </ClearButton>
              <ClearButton onClick={() => history.goBack()}>back</ClearButton>
            </ButtonContainer>
          </Header>
          <MainTitle>
            Your favourites recipes
          </MainTitle>
          <CardContainer>
              <ImageGridList favourites={favourites}></ImageGridList>

          </CardContainer>
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