import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"

import { Logout } from "../components/Logout"
import { AccessError } from '../components/AccessError'
import { Footer } from '../components/Footer'
import { AddFavourite } from '../components/AddFavourite'

import { handleSubmit } from "../fetch_data/recipes"
 
import { HeaderName, FormTitle, Form, Input, BackgroundImage, FormContainer, SearchResultContainer} from "../styles/styles_Welcome"
import { ClearButton, Container, Header, ButtonContainer, SubmitButton } from "../styles/styles_global"

import fruits from "../assets/images/fruits.jpg"

import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
// eslint-disable-next-line
import { LinearScale } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 400,
    height: 400,
    transform: 'translateZ(0)',
    // cursor: 'pointer',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    letterSpacing: '1px',
    cursor: 'pointer',
  },
  icon: {
    background: 'white',
    opacity: '1',
    cursor: 'pointer',
  },
}))
 
export const Welcome = () => {
  const recipesArray = JSON.parse(window.sessionStorage.getItem("recipesArray"))
  const classes = useStyles();

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
              <FormTitle>What's in your fridge? TEST NETLIFY UPDATES</FormTitle>
            
              <Input
              placeholder="Search by ingredients..."
              value={searchText}
              onChange={event => setSearchText(event.target.value)}
                ></Input>
                <SubmitButton onClick={event =>handleSubmit(event, searchText, setRecipes, setSearchText) }>search</SubmitButton>
            </Form>
          </FormContainer>
          <h3>{message}</h3>
        </div>
      )}

        <SearchResultContainer>
          
          {loggedIn &&
            recipes !== null &&
            recipes.map(recipe => {
              return (
                <div className={classes.root}>
                  <GridList cellHeight={250} cellWidth={80}  className={classes.gridList} cols={1}>
            
                    <GridListTile key={recipe.image} onClick={() => history.push(`/details/${recipe.id}`)} cols={recipe.featured ? 2 : 1} rows={recipe.featured ? 2 : 1 }
                                        >
                      <img src={recipe.image} alt={recipe.title} />

                      <GridListTileBar
                        title={recipe.title}
                        titlePosition="top"
                        actionIcon={
                          
                          <AddFavourite
                            className={classes.icon}
                            recipeId={recipe.id}
                            title={recipe.title}
                            image={
                              recipe.image === undefined
                                ? null
                                : `${recipe.image}`
                            }
                            favouriteId={recipe.id}
                          />
                        }
                        actionPosition="left"
                        className={classes.titleBar}
                      />
                    </GridListTile>
                )
              </GridList>
                  
                </div>
              )
            })
          }
          </SearchResultContainer>

      {!loggedIn && (
          <AccessError />
      )}
      </Container>
      <Footer />
      </>
  )
}