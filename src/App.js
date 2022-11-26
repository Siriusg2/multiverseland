import "./App.css";
import Cards from "./components/Cards.jsx";

import React from "react";
import styles from "./components/Cards.module.css";
import Nav from "./components/Nav";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  const Onsearch = (character) => {
    const input = document.querySelector("#input");

    fetch(`https://rickandmortyapi.com/api/character/${parseInt(character)}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          characters.forEach((obj) => {
            if (obj.id === parseInt(character)) {
              input.value = "";

              throw alert("ya existe la tarjeta");
            }
          });
          setCharacters((oldChars) => [...oldChars, data]);
          input.value = "";
        } else {
          if (character === "") throw alert("Debes ingresar un numero");
          window.alert("No hay personajes con ese ID");
          input.value = "";
        }
      });
  };

  const onClose = (id) => {
    const filtered = characters.filter((character) => character.name !== id);

    setCharacters(filtered);
  };

  const random = () => {
    const numrandom = () => Math.floor(Math.random() * (827 - 1) + 1);
    const random = numrandom();
    fetch(`https://rickandmortyapi.com/api/character/${random}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          characters.forEach((obj) => {
            if (obj.id === random) {
              throw alert("ya existe la tarjeta, sigue intentando");
            }
          });
          setCharacters((oldChars) => [...oldChars, data]);
        }
      });
  };

  return (
    <>
      <div className={styles.divNavBar}>
        <Nav fnOnSearch={Onsearch} random={random} />
      </div>
      <hr />
      <div className={styles.divCards}>
        <Cards characters={characters} onClose={onClose} />
      </div>
    </>
  );
}

export default App;
