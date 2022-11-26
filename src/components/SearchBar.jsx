import { useState, useEffect } from "react";

import styles from "./Cards.module.css";

export default function SearchBar(props) {
  const [character, setCharactername] = useState("");

  const onInput = (event) => {
    const value = event.target.value;
    setCharactername(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ingresa un caracter numerico"
        handleChange={onInput}
        className={styles.inputSearchBar}
      />

      <button
        type="submit"
        onClick={props.fnOnS(character)}
        className={styles.buttonSearchBar}
      >
        Agregar
      </button>
    </div>
  );
}
