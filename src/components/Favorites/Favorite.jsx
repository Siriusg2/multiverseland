import { NavLink } from "react-router-dom";
import styles from "./Favorites.module.css";

import React from "react";

const Favorite = (props) => {
  return (
    <div className={styles.divCard}>
      <NavLink to={`/detail/${props.id}`}>
        <span className={styles.firstText}>{props.name}</span>
      </NavLink>
      <img src={props.image} alt="" className={styles.imgFavorite} />

      <span className={styles.secondText}>{props.species}</span>
      <span className={styles.thirdText}>{props.gender}</span>
    </div>
  );
};

export default Favorite;
