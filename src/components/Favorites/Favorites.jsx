import React from "react";
import { connect } from "react-redux";
import Favorite from "./Favorite";
import styles from "../Cards/Cards.module.css";
class Favorites extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className={styles.divCards}>
        {this.props.myFavorites.map((card) => (
          <Favorite
            key={card.id}
            id={card.id}
            name={card.name}
            species={card.species}
            gender={card.gender}
            image={card.image}
          />
        ))}
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    ...state,
    myFavorites: [...state.myFavorites],
  };
};

export default connect(mapStateToProps, null)(Favorites);
