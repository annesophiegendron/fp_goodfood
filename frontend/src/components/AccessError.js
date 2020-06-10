import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

`
export const ErrorContainer = styled.div`
  background: #B3F2EC;
  text-align: center;
  width: 450px;
  margin-top: 150px;
  color: #718BD9;
  padding-top: 6rem;
  padding-bottom: 6rem;
  font-size: 2rem;
  font-family: "Roboto", sans-serif;
  letter-spacing: 2px;
  font-weight: 600;
`

export const ErrorButton = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 2rem;
  font-family: "Roboto", sans-serif;
  background: transparent;
  border: 2px #718BD9 solid;
  cursor: pointer;
  height: 2rem;
  color: #718BD9;
  :hover {
    background: #718BD9;
    color: white;
    transform: translate(0, -3px);
    transition: all 0.2s ease-in-out;
  }
`
export const AccessError = () => {
  const history = useHistory()
  return (
    <Wrapper>
    <ErrorContainer>
      Access denied{" "}
      <ErrorButton onClick={() => history.push("/")}>
        Back to Main Page
      </ErrorButton>
    </ErrorContainer>
  </Wrapper>
  )
}