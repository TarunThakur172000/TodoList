import { createSlice } from '@reduxjs/toolkit';

// Load authentication state from sessionStorage
const initialState = {
  isAuthenticated: sessionStorage.getItem("isAuthenticated") === "true" || false,
  user: sessionStorage.getItem("user") || "admin",
  pass: sessionStorage.getItem("pass") || "admin@123",
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      if (action.payload.username === state.user && action.payload.password === state.pass) {
        state.isAuthenticated = true;
        sessionStorage.setItem("isAuthenticated", "true");
        sessionStorage.setItem("user", state.user);
        sessionStorage.setItem("pass", state.pass);
      } else {
        alert("Wrong Credentials");
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      sessionStorage.removeItem("isAuthenticated");
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("pass");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
