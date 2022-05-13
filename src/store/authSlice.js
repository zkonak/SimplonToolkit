import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  email: null,
  userName: null,
  firstName: null,
};

const authSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setSignIn: (state, action) => {
      state.email = action.payload.email;
      state.isLoggedIn = action.payload.isLoggedIn;
      state.userName = action.payload.userName;
    },
    setSignOut: (state) => {
      state.email = null;
      state.userName = null;
      state.firstName = null;
      state.isLoggedIn = false;
    },

    getUser: (state) => {
      // isOffline ? get user from storarge : get user from API
      // state.email = null;
      // state.userName = null;
      // state.firstName = null;
      // state.isLoggedIn = false;
    },
  },
});

export const { setSignIn, setSignOut, getUser } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.userAuth.isLoggedIn;
export const selectEmail = (state) => state.userAuth.email;
export const selectUserName = (state) => state.userAuth.userName;
// export const selectUser = (state) => state.userAuth.user;

export default authSlice.reducer;
