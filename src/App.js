import "./App.css";
import Cards from "./components/Cards.jsx";

import React from "react";
import styles from "./components/Cards.module.css";
import Nav from "./components/Nav";
import { useState, useEffect } from "react";

function App() {
  const [characters, setCharacters] = useState([
    {
      name: "Rick Sanchez",
      species: "Human",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      name: "Morty Smith",
      species: "Human",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
    {
      name: "Summer Smith",
      species: "Human",
      gender: "Female",
      image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    },
    {
      name: "Beth Smith",
      species: "Human",
      gender: "Female",
      image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    },
  ]);

  const Onsearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  return (
    <>
      <div className={styles.divNavBar}>
        <Nav fnOnSearch={Onsearch} />
      </div>
      <hr />
      <div className={styles.divCards}>
        <Cards characters={characters} />
      </div>
    </>
  );
}

export default App;
