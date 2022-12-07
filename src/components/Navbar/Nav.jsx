/* eslint-disable */

import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Navbar.module.css";
import { NavLink, useLocation } from "react-router-dom";
import {
  activeStyle,
  unActivestyle,
  unActivestyleLogout,
} from "./NavStyles.js";


function Nav(props) {
  const location = useLocation();
  if(location.pathname === "/home"){
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
    );}

  if(location.pathname==="/about"){
return (
  <div className={styles.divBar}>
    <div className={styles.logoutButton}>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? undefined : unActivestyleLogout)}
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
       </div>
     );
   }
}

export default Nav;
// eslint-disable-next-line linebreak-style
/* eslint-enable */
