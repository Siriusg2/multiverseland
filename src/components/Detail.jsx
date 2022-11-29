import React from "react";
import styles from "./Cards.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = (props) => {
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
          });
          console.log(character);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, []);
  return (
    <div className={styles.divDetail}>
      <div className={styles.divDetailtext}>
        <h3 className={styles.h3Info} style={{ color: "rgb(8, 194, 8)" }}>
          <span style={{ color: "rgb(246, 136, 9)", opacity: 1 }}>Nombre:</span>{" "}
          {character.name}
          <hr />
          <span style={{ color: "rgb(246, 136, 9)", opacity: 1 }}>
            {" "}
            Especie:{" "}
          </span>
          {character.species}
          <hr />{" "}
          <span style={{ color: "rgb(246, 136, 9)", opacity: 1 }}>
            Estatus:
          </span>{" "}
          {character.status}
          <hr />{" "}
          <span style={{ color: "rgb(246, 136, 9)", opacity: 1 }}>
            {" "}
            Genero:
          </span>{" "}
          {character.gender}
          <hr />{" "}
          <span style={{ color: "rgb(246, 136, 9)", opacity: 1 }}>
            {" "}
            Origen:{" "}
          </span>
          {character.origin}
          <hr />{" "}
          <span style={{ color: "rgb(246, 136, 9)", opacity: 1 }}>
            Localizacion:
          </span>{" "}
          {character.location}
        </h3>
      </div>
      <div className={styles.divDetailImage}>
        <img src={character.image}></img>
      </div>
    </div>
  );
};

export default Detail;
