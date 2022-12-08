/* eslint-disable */

import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Navbar.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { unActivestyle, unActivestyleLogout } from "./NavStyles.js";
import {  useDispatch } from "react-redux";
import { orderCardsaction, filterCardsaction } from "../../redux/actions";

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
            style={({ isActive }) =>
              isActive ? undefined : unActivestyleLogout
            }
          >
            Logout
          </NavLink>
        </div>

        <div className={styles.favoritesButtonHome}>
          <NavLink
            to="/favorites"
            style={({ isActive }) => (isActive ? undefined : unActivestyle)}
          >
            Favorites
          </NavLink>
        </div>
        <div className={styles.aboutButtonHome}>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? undefined : unActivestyle)}
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
            style={({ isActive }) =>
              isActive ? undefined : unActivestyleLogout
            }
          >
            Logout
          </NavLink>
        </div>

        <div className={styles.homeButtonAbout}>
          <NavLink
            to="/home"
            style={({ isActive }) => (isActive ? undefined : unActivestyle)}
          >
            Home
          </NavLink>
        </div>
        <div className={styles.favoritesButtonAbout}>
          <NavLink
            to="/favorites"
            style={({ isActive }) => (isActive ? undefined : unActivestyle)}
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
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? undefined : unActivestyleLogout
            }
          >
            Logout
          </NavLink>
        </div>

        <div className={styles.homeButtonFavorites}>
          <NavLink
            to="/home"
            style={({ isActive }) => (isActive ? undefined : unActivestyle)}
          >
            Home
          </NavLink>
        </div>

        <div className={styles.aboutButtonFavorites}>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? undefined : unActivestyle)}
          >
            About
          </NavLink>
        </div>
        <div className={styles.filterOptions}>
          <label className={styles.labelId}>Filter for Card's ID :</label>
          <select
            name="order"
            className={styles.selectId}
            onChange={(e) => handleChangeOrder(e)}
          >
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>
          </select>
          <label className={styles.labelgender}>
            Filter for Character's Gender:
          </label>
          <select
            name="gender"
            className={styles.selectGender}
            onChange={(e) => handleChangeFilter(e)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Unknow">Unknow</option>
            <option value="Genderless">Genderless</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Nav;
// eslint-disable-next-line linebreak-style
/* eslint-enable */
