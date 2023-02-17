/* eslint-disable */

// import React from "react";
import styles from "./Detail.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const Detail = () => {
  const cardName = useParams();
  const [character, setCharacter] = useState({
    name: "",
    species: "",
    status: "",
    genre: "",
    image: "",
    origin: "",
    location: "",
    type: "",
  });

  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/character/${parseInt(cardName.detailID)}`
    )
      .then((response) => response.json())
      .then((char) => {
        if (char.id) {
          setCharacter({
            ...character,
            name: char.name,
            species: char.species,
            status: char.status,
            gender: char.gender,
            image: char.image,
            origin: char.origin.name,
            location: char.location.name,
            type: char.type,
            id: char.id
          });
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [cardName]);
  return (
    <>
      {" "}
    
      <div className={styles.divDetail}>
        <div className={styles.divDetailtext}>
          <h3 className={styles.h3Info} style={{ color: "rgb(8, 194, 8)" }}>
            <span className={styles.label}>ID Card:</span> #{character.id}
            <hr />
            <span className={styles.label}>Name:</span> {character.name}
            <hr />
            <span className={styles.label}> Specie: </span>
            {character.species}
            <hr /> <span className={styles.label}>Status:</span>{" "}
            {character.status}
            <hr /> <span className={styles.label}> Gender:</span>{" "}
            {character.gender}
            <hr /> <span className={styles.label}> Origin: </span>
            {character.origin}
            <hr /> <span className={styles.label}>Location:</span>{" "}
            {character.location}
          </h3>
        </div>
        <div className={styles.divDetailImage}>
          <img
            src={character.image}
            alt={character.name}
            className={styles.img}
          ></img>
        </div>
      </div>
    </>
  );
};

export default Detail;
// eslint-disable-next-line linebreak-style
/* eslint-enable */
