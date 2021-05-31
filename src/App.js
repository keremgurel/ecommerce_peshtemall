/* eslint-disable react/jsx-no-undef */
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "Login";
import { auth } from "./firebase";
import { useStateValue } from "StateProvider";



function App() {
  const [{}, dispatch] =useStateValue();

  useEffect(() => {
    // will only run with the first render call
    auth.onAuthStateChanged(authUser => {
      console.log('The user is: ', authUser);

      if(authUser) {
        // if the user is logged in
        // dispacth object is going to be sending the user info to the data layer
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM Convention
    <Router>
      <div className="app">

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />  
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
