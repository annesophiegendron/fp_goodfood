import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"

import { AddFavourite } from "../components/AddFavourite"
import { Logout } from "../components/Logout"
import { AccessError } from '../components/AccessError'

import { RecipeCard } from "../components/RecipeCard"

import { handleSubmit } from "../fetch_data/recipes"
 
import { HeaderName, FormTitle, Form, Input, OneCard, BackgroundImage, CollectionButton, FormContainer, ButtonWrapper } from "../styles/styles_Welcome"
import { ClearButton, Container, Header, ButtonContainer, CardContainer } from "../styles/styles_global"

import { Footer } from '../components/Footer'

import fruits from "../assets/images/fruits.jpg"
 
export const Welcome = () => {
  const recipesArray = JSON.parse(window.sessionStorage.getItem("recipesArray"))


  const [recipes, setRecipes] = useState(recipesArray)
  const [searchText, setSearchText] = useState("")
  // eslint-disable-next-line
  const [message, setMessage] = useState(false)

  const history = useHistory()

  const name = useSelector(store => store.auth.name)
  const loggedIn = useSelector(store => store.auth.loggedIn)

  const removeLocalHistory = () => {
    setRecipes([])
    window.sessionStorage.removeItem("recipesArray")
  }

  return (
    <>
    <Container>
      {loggedIn && (
        <div>
          <Header>
            <ButtonContainer>
              <Logout></Logout>
              <ClearButton onClick={removeLocalHistory}><span role="img" aria-labelledby="cross">╳ </span>clear search</ClearButton>
            </ButtonContainer>
            <HeaderName onClick={() => history.push("/profile")}><span role="img" aria-labelledby="cross">❤︎</span>welcome {name}!
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
              
                <RecipeCard
                  image={recipe.image}
                  title={recipe.title}
                ></RecipeCard>

            <ButtonContainer>
                <CollectionButton
                  onClick={() => history.push(`/details/${recipe.id}`)}
                >details
                </CollectionButton>

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
              </ButtonContainer>
                
              </OneCard>
            )
          })}
      </CardContainer>

      {!loggedIn && (
          <AccessError />
      )}
      </Container>
      <Footer />
      </>
  )
}