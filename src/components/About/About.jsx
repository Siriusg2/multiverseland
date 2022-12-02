import React from "react";
import ReactDOM from "react-dom";
import styles from "./About.module.css";
import foto from "./foto.jpg";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.divDetail}>
        <div className={styles.divDetailImage}>
          <img src={foto} className={styles.img}></img>
        </div>
        <div className={styles.divDetailtext}>
          <h3 className={styles.h3Info}>
            <span className={styles.label}>Name:</span>
            Gibson Gil
            <hr />
            <span className={styles.label}> Species: </span>
            Human
            <hr /> <span className={styles.label}>Status:</span> Alive
            <hr /> <span className={styles.label}> Gender:</span> Male
            <hr /> <span className={styles.label}> Origin: </span>
            Earth (C-137)
            <hr /> <span className={styles.label}>Location:</span> Unknow
          </h3>
        </div>
        <div className={styles.divDetailtext}>
          <h3 className={styles.h3Info}>
            <span className={styles.label}>Github:</span>{" "}
            <a href="https://github.com/Siriusg2" className={styles.links}>
              Siriusg2
            </a>
            <hr />
            <span className={styles.label}> Linkedin: </span>
            <a
              href="https://www.linkedin.com/in/gibson-gil-ab261215a/"
              className={styles.links}
            >
              Gibson Gil
            </a>
            <hr /> <span className={styles.label}>Instagram:</span>{" "}
            <a
              href="https://www.instagram.com/gibsonavilan/"
              className={styles.links}
            >
              @gibsonavilan
            </a>
            <hr /> <span className={styles.label}> Email:</span>
            <a href="mailto:gibsonavilan@gmail.com" className={styles.links}>
              gibsonavilan@gmail.com
            </a>
            <hr /> <span className={styles.label}> Discord: </span>
            <a
              href="https://discordapp.com/users/Siriusg2#0570"
              className={styles.links}
            >
              Siriusg2#0570
            </a>
            <hr /> <span className={styles.label}>Twitter:</span>{" "}
            <a href="https://twitter.com/gibsonavilan" className={styles.links}>
              @gibsonavilan
            </a>
          </h3>
        </div>
      </div>
    );
  }
}

export default About;
