import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"

import { Container, Form, Label, Input, Title, SubmitButton, RegisterText } from "../styles/styles_Login"
import { Footer } from '../components/Footer'

import { Error } from "../styles/styles_Register"

import { auth } from "../reducers/auth"
import { handleLoginUser } from "../fetch_data/auth"

export const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [errorText, setErrorText] = useState(false)
  const history = useHistory()
  const dispatch = useDispatch()

  return (
    <>
    <Container>
      <Form>
      <Title>Already a member? Sign-in here!</Title>
        <Label>email</Label>
            <Input
              type="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            ></Input>
            
        <Label>password</Label>
            <Input
              type="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            ></Input>
        
               
        <SubmitButton
            onClick={event => handleLoginUser(event, auth, email, password, setErrorText, dispatch, history)}
          >Login</SubmitButton>
        {errorText && <Error>User not found, access denied. Please try again.</Error>}
          
        <RegisterText>Don't have an account? Sign-up here:</RegisterText>
        <SubmitButton
          onClick={() => history.push("/register")}
          background="#8985F2"
          hover="#312F73"
          type="button"
          >sign-up</SubmitButton>
      </Form>
      </Container>
      <Footer />
      </>
  )
}