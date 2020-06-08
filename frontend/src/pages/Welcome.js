import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"

import { AddFavourite } from "./AddFavourite"
import { Logout } from "./Logout"
import { RecipeCard } from "../lib/RecipeCard"

import { ErrorButton, ErrorContainer } from "../styles/styles_error"

import { handleSubmit } from "../fetch_data/recipes"
 
import { HeaderName, FormTitle, Form, Input, OneCard, BackgroundImage, DetailsButton, FormContainer } from "../styles/styles_Welcome"
import { ClearButton, Container, Header, ButtonContainer, CardContainer } from "../styles/styles_global"

import fruits from "../assets/images/fruits.jpg"

export const Welcome = () => {
  const recipesArray = JSON.parse(window.sessionStorage.getItem("recipesArray"))

  const [recipes, setRecipes] = useState(recipesArray)
  const [searchText, setSearchText] = useState("")
  const [message, setMessage] = useState(false)

  const history = useHistory()

  const name = useSelector(store => store.auth.name)
  const loggedIn = useSelector(store => store.auth.loggedIn)

  const removeLocalHistory = () => {
    setRecipes([])
    window.sessionStorage.removeItem("recipesArray")
  }

  return (
    <Container>
      {loggedIn && (
        <div>
          <Header>
            <ButtonContainer>
              <Logout></Logout>
              <ClearButton onClick={removeLocalHistory}><span role="img" aria-labelledby="cross">╳ </span>clear search</ClearButton>
            </ButtonContainer>
            <HeaderName onClick={() => history.push("/profile")}>welcome {name}!
            </HeaderName>
          </Header>

          <FormContainer>
          <BackgroundImage src={fruits} />
          <Form
            onSubmit={event =>
              handleSubmit(event, searchText, setRecipes, setSearchText)
            }
          >
              <FormTitle>What's in your fridge?</FormTitle>
            
              <Input
              placeholder="Search by ingredients..."
              value={searchText}
              onChange={event => setSearchText(event.target.value)}
            ></Input>
            </Form>
          </FormContainer>
          <h3>{message}</h3>
        </div>
      )}

      <CardContainer>
        {loggedIn &&
          recipes !== null &&
          recipes.map(recipe => {
            return (
              <OneCard key={recipe.id}>
                <AddFavourite
                  recipeId={recipe.id}
                  title={recipe.title}
                  image={
                    recipe.image === undefined
                      ? null
                      : `${recipe.image}`
                  }
                  favouriteId={recipe.id}
                ></AddFavourite>

                <RecipeCard
                  image={recipe.image}
                  title={recipe.title}
                ></RecipeCard>

                <DetailsButton
                  onClick={() => history.push(`/details/${recipe.id}`)}
                >
                  Show More
                </DetailsButton>
              </OneCard>
            )
          })}
      </CardContainer>

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