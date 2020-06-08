import styled from 'styled-components'
import React from 'react'
import { useHistory } from 'react-router-dom'

export const LinkWrapper = styled.div`
  transform: translate(-50 %, -50 %);
  display: block;
  padding: 22px 32px;
  margin: 0 auto;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  border: none;
  text-align: center;
  position: relative;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  width: 100px;
  font-weight: lighter;
  text-decoration: none;
  border: 3px solid #262321;
  background: transparent;
  color: #262321;
  text-transform: uppercase;
  transition: all .35s;

    :hover{
    width: 80px;
    background: #333;
    color: white;
    border: none;
    opacity: 0.95;
  }

  @media (min-width: 600px) {
    font-size: 20px;
    width: 160px;
  
      :hover{
      width: 140px;
    }
  }
`

export const RegisterText = styled.span`
  position : relative;
  letter-spacing: 3px;
  z-index: 100;
`

export const MainRegisterButton = () => {
  const history = useHistory()
  return (
    <LinkWrapper onClick={() => history.push("/register")}>
      <RegisterText>Register</RegisterText>
    </LinkWrapper>
  )
}