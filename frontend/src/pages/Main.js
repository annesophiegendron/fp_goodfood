import React from "react"
import { useHistory } from "react-router-dom"

import { Video, Middle, WelcomeMessage, Navbar, Link, Container } from "../styles/styles_Main"

import { MainRegisterButton } from '../lib/Main_RegisterButton'
import { TextSection } from '../lib/TextSection'
import { Footer } from '../components/Footer'

import kitchen from "../assets/videos/kitchen.mp4"

export const Main = () => {
  const history = useHistory()

  return (
    <>
    <Container>
      <Video autoPlay playsInline muted loop>
        <source src={kitchen} type="video/mp4"></source>
        "Your browser is not supported!"
      </Video>
      <Navbar>
        <Link onClick={() => history.push("/login")}>login</Link>
        <Link onClick={() => history.push("/register")}>register</Link>
      </Navbar>
      <Middle>
      <WelcomeMessage><strong>Welcome!</strong> Join our community of food lovers</WelcomeMessage>
        <MainRegisterButton />
      </Middle>
    </Container>
      
      <TextSection />
      <Footer />
      </>
  )
}