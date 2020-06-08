import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: localStorage.getItem("name"),
  email: "",
  userId: "",
  accessToken: localStorage.getItem("accessToken"),
  loggedIn: localStorage.getItem("loggedIn")
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.accessToken = action.payload;
      localStorage.setItem("accessToken", action.payload);
    },
    setUser: (state, action) => {
      state.userId = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
      localStorage.setItem("loggedIn", action.payload);
    },
    setLoggedOut: (state, action) => {
      state.loggedIn = false;
      localStorage.clear();
      sessionStorage.clear();
    },
    setName: (state, action) => {
      state.name = action.payload;
      localStorage.setItem("name", action.payload);
    }
  }
});