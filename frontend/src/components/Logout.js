import React from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { auth } from "../reducers/auth"

import swal from 'sweetalert'

import { Button } from "../styles/styles_Logout"

export const Logout = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  //LOG OUT
  // eslint-disable-next-line
  const handleLogOut = () => {
    history.push("/")
    dispatch(auth.actions.setLoggedOut())
  }

  return <Button
    onClick={() => swal({
      title: "Are you sure?",
      dangerMode: true,
      buttons: true,
    })
      .then((willQuit) => {
        if (willQuit) {
          history.push("/")
          dispatch(auth.actions.setLoggedOut())
        } else {
          swal("❤︎");
      }
    })
    }>logout
    </Button>
}

