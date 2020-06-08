import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { Main } from "./components/Main"
import { Register } from "./components/Register"
import { Login } from "./components/Login"
import { Welcome } from "./components/Welcome"
import { Details } from "./components/Details"
import { Review } from "./components/Review"
import { Profile } from "./components/Profile"
import { Favourites } from "./components/Favourites"

import { auth } from "./reducers/auth"

const reducer = combineReducers({
  auth: auth.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/welcome" exact component={Welcome} />
          <Route path="/details/:recipeId" exact component={Details} />
          <Route path="/review" exact component={Review} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/favourites" exact component={Favourites} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}