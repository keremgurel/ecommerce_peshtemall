/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Header.css";
import logo from "../src/Images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user } ] = useStateValue();

  const handleAuthentication = () => {
    if(user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="" />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
        {/* Logo */}
      </div>

      <div className="header__nav">
        {/* If there is no user logged in and we press the Sign In ref, then forward to login page */}
        <Link to='/login'>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">{!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to='/orders'>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>


        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Account</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header_optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
