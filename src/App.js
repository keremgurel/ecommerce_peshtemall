/* eslint-disable react/jsx-no-undef */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    //BEM Convention
    <Router>
      <div className="app">
        <Header />

        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/">
            {/* <Header /> */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
