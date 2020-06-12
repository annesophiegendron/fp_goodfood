import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"

import { Logout } from "../components/Logout"
import { AccessError } from '../components/AccessError'
import { Footer } from '../components/Footer'

import { handleSubmit } from "../fetch_data/recipes"
import { addFavourite } from "../fetch_data/favourites"
 
import { HeaderName, FormTitle, Form, Input, BackgroundImage, FormContainer, SearchResultContainer } from "../styles/styles_Welcome"
import { ClearButton, Container, Header, ButtonContainer, CardContainer, SubmitButton } from "../styles/styles_global"

import fruits from "../assets/images/fruits.jpg"

import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import StarBorderIcon from '@material-ui/icons/StarBorder'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 800,
    height: 500,
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
}));
 
export const Welcome = ({ title, image, favouriteId }) => {
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

  const recipe = { title, image, favouriteId, name }

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
                  <GridList cellHeight={250} cellWidth={80}  className={classes.gridList}>
            
                    <GridListTile key={recipe.image} cols={recipe.featured ? 2 : 1} rows={recipe.featured ? 2 : 1}>
                      <img src={recipe.image} alt={recipe.title} />
                    
                      <GridListTileBar
                        title={recipe.title}
                        titlePosition="top"
                        actionIcon={
                          <IconButton aria-label={`star ${recipe.title}`} className={classes.icon} onClick={() => addFavourite(recipe)}>
                            <StarBorderIcon />
                          </IconButton>
                        }
                        actionPosition="left"
                        className={classes.titleBar}
                      />
                    </GridListTile>
                )}
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