import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import styles from "./components/Cards.module.css";

ReactDOM.render(<App clasName={styles.app} />, document.getElementById("root"));
