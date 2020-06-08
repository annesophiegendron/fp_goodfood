import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { DetailsReview } from "./DetailsReview"
import { Logout } from "./Logout"
import { DetailsCard } from "./DetailsCard"

import { fetchData } from "../fetch_data/recipes"
import { fetchReviews, addReview } from "../fetch_data/reviews"
import { AddReview } from "./AddReview"

import { ButtonProfile, HeaderReview, InputReview, Form } from "../styles/styles_Details"

import { Container, ClearButton, Header, ButtonContainer, Loader } from "../styles/styles_global"

// const URL = "http://localhost:8080/review"
export const Details = () => {
  const [details, setDetails] = useState([])
  const [reviews, setReviews] = useState([])
  const [userReview, setUserReview] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const history = useHistory()

  const { recipeId } = useParams()
  const loggedIn = useSelector(store => store.auth.loggedIn)
  const name = useSelector(store => store.auth.name)

  useEffect(() => {
    fetchData(recipeId, setError, setDetails, setLoading);
  }, [])

  useEffect(() => {
    fetchReviews(recipeId, setReviews)
  }, [recipeId])

  return (
    <Container className="details-section">
      {loading && !error && loggedIn && <Loader className="loading"></Loader>}
      {error && loggedIn && <h2 className="loading">recipe not found</h2>}
      {!error && !loading && loggedIn && (
        <div>
         
          <Header>
            <ButtonContainer>
              <Logout></Logout>
              <ClearButton onClick={() => history.push("/welcome")}>
                back
              </ClearButton>
            </ButtonContainer>
            <ButtonProfile onClick={() => history.push("/profile")}>
              profile
            </ButtonProfile>
          </Header>
         
          <DetailsCard
            title={details.title}
            image={details.image}
            description={details.description}
          ></DetailsCard>
         
          <HeaderReview>
            Reviews
          </HeaderReview>
          
          <Form onSubmit={addReview}>
            <InputReview
              placeholder="Add a review.."
              type="textarea"
              value={userReview}
              onChange={e => setUserReview(e.target.value)}
            ></InputReview>
           
            <AddReview
              title={details.title}
              description={details.description}
              setReviews={setReviews}
              setUserReview={setUserReview}
              reviews={reviews}
              recipeId={recipeId}
              userReview={userReview}
            ></AddReview>
         
          </Form>
          
          <DetailsReview reviews={reviews}></DetailsReview>
        </div>
      )}
      {!loggedIn && (
        <div>
          Access denied
          <button onClick={() => history.push("/")}>Back to Main Page</button>
        </div>
      )}
    </Container>
  )
}