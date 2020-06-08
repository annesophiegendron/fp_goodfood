export const handleRegister = (name, email, password, setErrorText, history) => {
  fetch("http://localhost:8080/users", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
    headers: { "Content-Type": "application/json" }
  })
    .then(res => {
      res.json();
      if (res.status === 201) {
        history.push("/login");
      } else {
        setErrorText(true);
        throw new Error("Cannot sign up, please try again")
      }
    })
    .then(json => console.log(json))
    .catch(err => console.log("error:", err))
}

export const handleLoginUser = (event, auth, email, password, setErrorText, dispatch, history) => {
 event.preventDefault();

  fetch("http://localhost:8080/sessions", {
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
        throw new Error("Unable to login, please try again");
      }
    })
    .then(json => {
      history.push("/welcome");
      console.log(json);
      dispatch(auth.actions.setLoggedIn(json.loggedIn));
      dispatch(auth.actions.setToken(json.accessToken));
      dispatch(auth.actions.setUser(json.userId));
      dispatch(auth.actions.setName(json.name));
    })
    .catch(err => console.log("error:", err));
};