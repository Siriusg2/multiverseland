import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import styles from "./components/Cards.module.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App clasName={styles.app} />
  </BrowserRouter>,

  document.getElementById("root")
);
