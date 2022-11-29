import React from "react";
import SearchBar from "./SearchBar";
import styles from "./Cards.module.css";
import { NavLink } from "react-router-dom";
import {
  activeStyleHome,
  unActivestyleHome,
  activeStyleAbout,
  unActivestyleAbout,
  activeStyleLogout,
  unActivestyleLogout,
} from "./NavStyles.js";

function Nav(props) {
  return (
    <>
      <NavLink
        to="/home"
        style={({ isActive }) =>
          isActive ? activeStyleHome : unActivestyleHome
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? undefined : unActivestyleLogout)}
      >
        Logout
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) =>
          isActive ? activeStyleAbout : unActivestyleAbout
        }
      >
        About
      </NavLink>
      <div className={styles.divSearchBar}>
        <SearchBar fnOnS={props.fnOnSearch} random={props.random} />
      </div>
    </>
  );
}

export default Nav;
