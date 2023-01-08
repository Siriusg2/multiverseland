/* eslint-disable */
import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Cards from "./components/Cards/Cards";

import styles from "./components/Cards/Cards.module.css";
import Nav from "./components/Navbar/Nav";

import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import NotFound from "./components/NotFound/NotFound";
import Form from "./components/Form/Form";

import Favorites from "./components/Favorites/Favorites";
import Footer from "./components/Footer/Footer";

import { useDispatch, useSelector } from "react-redux";

/* componente principal */
function App() {
  /* estados del componente */

  const location = useLocation();
  const [access, setAccess] = useState(false);
  const username = "admin@admin.com";
  const password = "123456";
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

  /* funcion que se pasa por props hasta el componente Card,
  para hacer funcionar al boton de cerrar tarjeta.
  usa un filter para setear el estado a todas las tarjetas que no contentgan el
  nombre pasado por parametro */


  if (location.pathname !== "/") {
    return (
      <>
        <Nav className={styles.divNavBar} />
        <Routes>
          <Route
            exact
            path="/home"
            element={
              <Cards
              
                
                className={styles.divCards}
              />
            }
          />

          <Route exact path="/about" element={<About />} />

          <Route exact path="/detail/:detailID" element={<Detail />} />

          <Route exact path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />;
      </>
    );
  }
  return (
    <div className={styles.divForm}>
      <Form login={login} />
    </div>
  );
}

export default App;

// eslint-disable-next-line linebreak-style
/* eslint-enable */
