import React from "react";
import styles from "./Cards.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  const { cardName } = useParams();
  const [character, setCharacter] = useState("holis");

  useEffect(() => {
    setCharacter(cardName);
    console.log(cardName);
  }, []);
  return (
    <>
      <h1 className={styles.h1}>{cardName} </h1>
    </>
  );
};

export default Detail;
