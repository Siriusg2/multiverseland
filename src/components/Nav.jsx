import React from "react";
import SearchBar from "./SearchBar";
import styles from "./Cards.module.css";

function Nav(props) {
  return (
    <div className={styles.divSearchBar}>
      <SearchBar fnOnS={props.fnOnSearch} />
    </div>
  );
}

export default Nav;
