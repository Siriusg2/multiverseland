import "./App.css";
import Cards from "./components/Cards.jsx";

import React from "react";
import styles from "./components/Cards.module.css";
import Nav from "./components/Nav";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import NotFound from "./components/NotFound";
import Form from "./components/Form/Form";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

/*componente principal*/
function App() {
  /*estado del componente*/
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [access, setAccess] = useState(false);
  const username = "gibsonavilan@gmail.com";
  const password = "sebas2411";
  const navigate = useNavigate("");

  // validacion de los datos del formulario de login
  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  /*funcion que se pasa por props hasta el componente SearchBar
con esta funcion, el boton "agregar" de la barra de busqueda hace un llamado a la API
y basado en la informacion del estado, genera una nueva tarjeta
o envia un alert para indicar que esta repetida, adicionalmente 
limpia el value del input para que el usuario no deba borrar lo que ingreso 
cada vez que quiera agregar una tarjeta nueva*/
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

  /*funcion que se pasa por props hasta el componente Card, 
  para hacer funcionar al boton de cerrar tarjeta.
  usa un filter para setear el estado a todas las tarjetas que no contentgan el 
  nombre pasado por parametro*/
  const onClose = (id) => {
    const filtered = characters.filter((character) => character.name !== id);

    setCharacters(filtered);
  };

  /*funcion que se pasa por props hasta el componente SearchBar
con esta funcion, el boton "busqueda aleatoria", genera un numero random 
entre 1 y 826 (cantidad de objetos en la API), y basado en la informacion del estado
genera una nueva tarjeta, o envia un alert, para avisar al usuario que la tarjeta ya existe
(improbable, pero puede suceder jajaja)*/
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

  /*
          cuerpo del componente
*/

  if (location.pathname !== "/") {
    return (
      <>
        <Nav
          fnOnSearch={Onsearch}
          random={random}
          className={styles.divNavBar}
        />
        <Routes>
          <Route
            exact
            path="/home"
            element={
              <Cards
                characters={characters}
                onClose={onClose}
                className={styles.divCards}
              />
            }
          />

          <Route path="/about" element={<About />} />

          <Route path="/detail/:detailID" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    );
  } else {
    return <Form login={login} />;
  }
}

export default App;
