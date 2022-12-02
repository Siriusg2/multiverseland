import { useState } from "react";

import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  const [character, setCharactername] = useState("");

  /*  handleEvent para el input, setea el estado de este componente al 
  valor ingresado por el usuario mediante el listener onChange*/
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
