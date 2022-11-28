import React from "react";
import ReactDOM from "react-dom";
import styles from "./Cards.module.css";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.about}>
        <h1>hola soy el componente about</h1>
      </div>
    );
  }
}

export default About;
