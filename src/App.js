/* eslint-disable react/jsx-no-undef */
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header.js";
import Home from "./Pages/Home.js";
import Checkout from "./Pages/Checkout.js";
import Login from "Pages/Login.js";
import Orders from "./Components/Orders.js";
import { auth } from "./firebase";
import { useStateValue } from "StateProvider";
import Payment from "./Pages/Payment.js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"


const promise = loadStripe(
  "pk_test_51IxhACEL2O8em9MWNlNlogjucvzum39PO68NGNTAhsXCM0friRP3RrZI64ouzkPKXATONJ0BESd3G1HKWh9VMd92001KG4BldK"
);

function App() {
  const [{}, dispatch] =useStateValue();

  // using useEffect to handle authentication
  useEffect(() => {
    // will only run with the first render call
    auth.onAuthStateChanged(authUser => {
      console.log('The user is: ', authUser);

      if(authUser) {
        // if the user is logged in
        // dispatch object is going to be sending the user info to the data layer
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
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />  
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
