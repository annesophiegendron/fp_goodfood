// Lorem ipsum text on the landing page

import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  margin: auto;
  width: 100%;
  padding: 10px;
  text-align: center;

  @media (min-width: 900px) {
   width: 60%;
  }
`
export const TextIntro = styled.h2`
  padding: 60px; 
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  font-weight: lighter;
`

export const TextSection = () => {
  return (
    <Container>
      <TextIntro>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.      </TextIntro>
    </Container>)
}