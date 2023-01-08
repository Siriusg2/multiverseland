/* eslint-disable */

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchCharacter } from "../../redux/actions";

import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  const [character, setCharactername] = useState("");
  const allCharacters = useSelector((state) => state.allCharacters);
  const dispatch = useDispatch();

  /*  handleEvent para el input, setea el estado de este componente al 
  valor ingresado por el usuario mediante el listener onChange*/
  const onInput = (event) => {
    const value = event.target.value;

    setCharactername(value);
  };
  const numrandom = () => Math.floor(Math.random() * (827 - 1) + 1);

  const onClick = (number) => {
    const result = allCharacters.find((character) => character.id === parseInt(number));
return result ? alert("Card is already exist") :dispatch(searchCharacter(number));

   
  };

  return (
    <>
      <input
        type="number"
        placeholder="Enter a number..."
        onChange={onInput}
        className={styles.inputSearchBar}
        id="input"
      />

      <button
        className={styles.buttonSearch}
        onClick={() => onClick(character)}
      >
        Search
      </button>
      <button
        className={styles.buttonRandom}
        onClick={() => onClick(numrandom())}
      >
        Random Search
      </button>
    </>
  );
}
// eslint-disable-next-line linebreak-style
/* eslint-enable */
