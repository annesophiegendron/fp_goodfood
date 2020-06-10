import React from 'react'
import { useHistory } from 'react-router-dom'

import styled from 'styled-components'

import instagram from '../assets/svg/instagram.svg'

export const Container = styled.div`
margin: auto;
width: 100%;
height: 300px;
padding: 10px;
text-align: center;
background-color: black;
`

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 0.5rem;
`

export const Link = styled.a`
  color: white;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;

  :hover {
    color: #6F7073;
  }
`
export const TextSection = styled.div`
  padding: 100px; 
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-weight: lighter;
  color: white;
  letter-spacing: 1px;
`

export const Text = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: white;

  :hover {
    color: #6F7073;
  }
`

export const Footer = () => {
  const history = useHistory()

  return (
    <Container>
      <LinkWrapper>
        <Link onClick={() => history.push("/login")}>login</Link>
        <Link onClick={() => history.push("/registre")}>register</Link>
        <Link onClick={() => history.push("/favourites")}>favourites</Link>
        <Link onClick={() => history.push("/review")}>reviews</Link>
        <Link onClick={() => history.push("/welcome")}>search</Link>
      </LinkWrapper>
      <TextSection>
        <Text  href="https://www.linkedin.com/in/anne-sophie-gendron/" target="_blank">anne-sophie gendron @2020</Text>
      </TextSection>
    </Container>)
}