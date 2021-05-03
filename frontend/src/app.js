import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import "./scss/index.scss";

import { Home, Login, SignUp, Stats, Profile } from "./pages";
export const AuthContext = React.createContext(); // added this
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.username));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.username,
        token: action.payload.token,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

function App() {
    const [state, dispatch] = React.useReducer(reducer, initialState);
  console.log('state update!');
  console.log(state);
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <Router>
        <Switch>
          <Route exact path="/">
            {!state.isAuthenticated ? (
              <Login />
            ) : (
              <Home />
            )}
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            {!state.isAuthenticated ? (
              <Login />
            ) : (
              <Home />
            )}
            <Home />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/profile">
            {!state.isAuthenticated ? <Login /> : <Profile id={1} />}
          </Route>
          <Route path="/stats">
            {!state.isAuthenticated ? (
              <Login />
            ) : (
            <Stats />
            )}
          </Route>
        </Switch>
        {/* <Profile id={1} /> */}
      </Router>
    </AuthContext.Provider>
  );
}

export default App;

