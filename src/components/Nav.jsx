import React from "react";
import SearchBar from "./SearchBar";
import styles from "./Cards.module.css";

function Nav(props) {
  return (
    <div className={styles.divSearchBar}>
      <SearchBar fnOnS={props.fnOnSearch} random={props.random} />
    </div>
  );
}

export default Nav;
