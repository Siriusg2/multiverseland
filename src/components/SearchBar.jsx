import { useState } from "react";

import styles from "./Cards.module.css";

export default function SearchBar(props) {
  const [character, setCharactername] = useState("");

  const onInput = (event) => {
    const value = event.target.value;
    setCharactername(value);
  };

  return (
    <>
      <input
        placeholder="Ingresa un caracter numerico"
        onChange={onInput}
        className={styles.inputSearchBar}
        id="input"
      />
      <button
        className={styles.buttonSearch}
        onClick={() => {
          props.fnOnS(character);
          setCharactername("");
        }}
      >
        Buscar
      </button>
      <button className={styles.buttonRandom} onClick={() => props.random()}>
        Busqueda aleatoria
      </button>
    </>
  );
}
