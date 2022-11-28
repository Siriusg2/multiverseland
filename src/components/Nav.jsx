import React from "react";
import SearchBar from "./SearchBar";
import styles from "./Cards.module.css";
import { NavLink } from "react-router-dom";

function Nav(props) {
  return (
    <div className={styles.divSearchBar}>
      <NavLink to="/home">hola soy el home</NavLink>
      <NavLink to="/about">hola soy el link</NavLink>
      <NavLink to="/detail">hola soy el detail</NavLink>
      <SearchBar fnOnS={props.fnOnSearch} random={props.random} />
    </div>
  );
}

export default Nav;
