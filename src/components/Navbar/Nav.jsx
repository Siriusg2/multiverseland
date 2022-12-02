import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import {
  activeStyle,
  unActivestyle,
  unActivestyleLogout,
} from "./NavStyles.js";

function Nav(props) {
  return (
    <div className={styles.divSearchBar}>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? undefined : unActivestyleLogout)}
      >
        Logout
      </NavLink>

      <NavLink
        to="/home"
        style={({ isActive }) => (isActive ? activeStyle : unActivestyle)}
      >
        Home
      </NavLink>

      <NavLink
        to="/favorites"
        style={({ isActive }) => (isActive ? activeStyle : unActivestyle)}
      >
        Favorites
      </NavLink>

      <NavLink
        to="/about"
        style={({ isActive }) => (isActive ? activeStyle : unActivestyle)}
      >
        About
      </NavLink>

      <SearchBar fnOnS={props.fnOnSearch} random={props.random} />
    </div>
  );
}

export default Nav;
