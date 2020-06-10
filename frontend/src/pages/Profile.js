import React from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import { Logout } from "../components/Logout"
import { Footer } from '../components/Footer'
import { AccessError } from '../components/AccessError'

import { Container, Header, MainTitle, ButtonContainer, ClearButton } from "../styles/styles_global"

import { FlexContainer, Image, Button, Text } from "styles/styles_Profile"

import orange from "../assets/images/orange.jpg"
import kiwi from "../assets/images/kiwi.jpg"

export const Profile = () => {
  const history = useHistory()
  const loggedIn = useSelector(store => store.auth.loggedIn)

  return (
    <>
    <Container>
      
      {loggedIn && (
        <>
          <Header>
            <ButtonContainer>
              <Logout></Logout>
              <ClearButton onClick={() => history.goBack()}>back</ClearButton>
            </ButtonContainer>
          </Header>
          <MainTitle>your profile</MainTitle>
          <FlexContainer>
            <Button onClick={() => history.push("/review")}>
                <Image src={kiwi} />
                <Text>your reviews</Text>
            </Button>
            <Button onClick={() => history.push("/favourites")}>
                <Image src={orange} />
                <Text>your favourites recipes</Text>
            </Button>
          </FlexContainer>
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