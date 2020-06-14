import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { Main } from "./pages/Main"
import { Register } from "./pages/Register"
import { Login } from "./pages/Login"
import { Welcome } from "./pages/SearchPage"
import { Details } from "./pages/Details"
import { Review } from "./pages/Review"
import { Profile } from "./pages/Profile"
import { Favourites } from "./pages/Favourites"

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
          <Route path="/Welcome" exact component={Welcome} />
          <Route path="/details/:recipeId" exact component={Details} />
          <Route path="/review" exact component={Review} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/favourites" exact component={Favourites} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}