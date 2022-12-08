/* eslint-disable */

import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Navbar.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { unActivestyle, unActivestyleLogout } from "./NavStyles.js";
import {  useDispatch } from "react-redux";
import { orderCardsaction, filterCardsaction } from "../../redux/actions";
import Filter from "../Filter/Filter";

function Nav(props) {
  const location = useLocation();
 
  const dispatch = useDispatch();

   const handleChangeOrder = (event) => {
     const targetValue = event.target.value;

     dispatch(orderCardsaction(targetValue));
   };

   const handleChangeFilter = (event) => {
     const targetValue = event.target.value;

    dispatch(filterCardsaction(targetValue));
   };
  if (location.pathname === "/home") {
    return (
      <div className={styles.divBar}>
        <div className={styles.logoutButton}>
          <NavLink
            to="/"
            style={unActivestyleLogout}
          >
            Logout
          </NavLink>
        </div>

        <div className={styles.favoritesButtonHome}>
          <NavLink
            to="/favorites"
            style={unActivestyle}
          >
            Favorites
          </NavLink>
        </div>
        <div className={styles.aboutButtonHome}>
          <NavLink
            to="/about"
            style={unActivestyle}
          >
            About
          </NavLink>
        </div>
        <div className={styles.searchBar}>
          <SearchBar fnOnS={props.fnOnSearch} random={props.random} />
        </div>
      </div>
    );
  }

  if (location.pathname === "/about") {
    return (
      <div className={styles.divBar}>
        <div className={styles.logoutButton}>
          <NavLink
            to="/"
            style={unActivestyleLogout}
          >
            Logout
          </NavLink>
        </div>

        <div className={styles.homeButtonAbout}>
          <NavLink
            to="/home"
            style={unActivestyle}
          >
            Home
          </NavLink>
        </div>
        <div className={styles.favoritesButtonAbout}>
          <NavLink
            to="/favorites"
            style={unActivestyle}
          >
            Favorites
          </NavLink>
        </div>
      </div>
    );
  }

  if (location.pathname === "/favorites") {
    return (
      <div className={styles.divBar}>
        <div className={styles.logoutButton}>
          <NavLink to="/" style={unActivestyleLogout}>
            Logout
          </NavLink>
        </div>

        <div className={styles.homeButtonFavorites}>
          <NavLink to="/home" style={unActivestyle}>
            Home
          </NavLink>
        </div>

        <div className={styles.aboutButtonFavorites}>
          <NavLink to="/about" style={unActivestyle}>
            About
          </NavLink>
        </div>
        <div >
          <Filter styles={styles} />
        </div>
      </div>
    );
  }
}

export default Nav;
// eslint-disable-next-line linebreak-style
/* eslint-enable */
