import { URL_ROOT } from '../fetch_data/constants'

// HANDLE REGISTER

export const handleRegister = (name, email, password, setErrorText, history) => {
  fetch(URL_ROOT+ `users`, {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
    headers: { "Content-Type": "application/json" }
  })
    .then(res => {
      res.json();
      if (res.status === 201) {
        history.push("/login")
      } else {
        setErrorText(true);
        throw new Error("Cannot sign up, please try again")
      }
    })
    .then(json => console.log(json))
    .catch(err => console.log("error:", err))
}

//HANDLE LOGIN

export const handleLoginUser = (event, auth, email, password, setErrorText, dispatch, history) => {
 event.preventDefault();
  fetch(URL_ROOT+ `sessions`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        setErrorText(true);
        throw new Error("Unable to login, please try again")
      }
    })
    .then(json => {
      history.push("/welcome")
      console.log(json)
      dispatch(auth.actions.setLoggedIn(json.loggedIn))
      dispatch(auth.actions.setToken(json.accessToken))
      dispatch(auth.actions.setUser(json.userId))
      dispatch(auth.actions.setName(json.name))
    })
    .catch(err => console.log("error:", err))
}