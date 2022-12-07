/* eslint-disable */
import React from "react";
import { connect } from "react-redux";
import Favorite from "./Favorite";
import styles from "../Favorites/Favorites.module.css";
import { orderCardsaction, filterCardsaction } from "../../redux/actions";

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
    this.handleChangeOrder = this.handleChangeOrder.bind(this);
  }

  handleChangeOrder = (event) => {
    const targetValue = event.target.value;

    this.props.orderCards(targetValue);
  };

  handleChangeFilter = (event) => {
    const targetValue = event.target.value;

    this.props.filterCards(targetValue);
  };

  render() {
    return (
      <div className={styles.containerFavorites}>
        <div className={styles.filterOptions}>
          <label className={styles.labelId}>Filter for Card's ID :</label>
          <select
            name="order"
            className={styles.selectId}
            onChange={(e) => this.handleChangeOrder(e)}
          >
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>
          </select>
          <label className={styles.labelgender}>
            Filter for Character's Gender:
          </label>
          <select
            name="gender"
            className={styles.selectGender}
            onChange={(e) => this.handleChangeFilter(e)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Unknow">Unknow</option>
            <option value="Genderless">Genderless</option>
          </select>
        </div>
        <div className={styles.divCardsFavorites}>
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

export const mapDispatchToProps = (dispatch) => {
  return {
    filterCards: (gender) => dispatch(filterCardsaction(gender)),
    orderCards: (type) => dispatch(orderCardsaction(type)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
// eslint-disable-next-line linebreak-style
/* eslint-enable */
