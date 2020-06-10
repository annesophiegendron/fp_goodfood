import React, { useState } from "react"
import { useHistory } from "react-router-dom"

import { Container, Form, Title, Label, Input, SubmitButton, RegisterText} from "../styles/styles_Auth"
import { Footer } from '../components/Footer'

import { handleRegister } from "../fetch_data/auth"

export const Register = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [errorText, setErrorText] = useState(false)
  const history = useHistory()

  return (
    <>
    <Container>
      <Form>
        <Title>Create a new account <span role="img" aria-labelledby="celebrate image">🎉</span></Title>

        <Label>name</Label>
        <Input
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        ></Input>

        <Label>email</Label>
        <Input
          type="text"
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
          onClick={() => handleRegister(name, email, password, setErrorText, history)}
        >submit</SubmitButton>

        {errorText && <p>Could not create user, please try again.</p>}

        <RegisterText>Already have an account?</RegisterText>
        <SubmitButton
          onClick={() => history.push("/login")}
          background="#8985F2"
          hover="#312F73"
          type="button"
          >sign-in</SubmitButton>
          
        </Form>
        
      </Container>

      <Footer />
      </>
  )
}