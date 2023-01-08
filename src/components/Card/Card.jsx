/* eslint-disable */
import { NavLink } from "react-router-dom";
import styles from "./Card.module.css";
import { addFavorite, removeFavorite } from "../../redux/actions";
import { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";

function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const handleFavorite = () => {
    if (isFav === false) {
      setIsFav(true);
      props.addFavorite({
        id: props.id,
        name: props.name,
        gender: props.gender,
        species: props.species,
        image: props.image,
      });
    } else {
      setIsFav(false);
      props.removeFavorite(props.id);
    }
  };

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites, props.id]);
  return (
    <div className={styles.divCard}>
      {isFav ? (
        <button onClick={handleFavorite} className={styles.buttonFav}>
          ❤️
        </button>
      ) : (
        <button onClick={handleFavorite} className={styles.buttonFav}>
          🤍
        </button>
      )}

      <button
        onClick={() => {
          dispatch(props.removeCard(props.id));
        }}
        className={styles.buttonClose}
      >
        X
      </button>

      <img className={styles.imgCard} src={props.image} alt="" />

      <NavLink to={`/detail/${props.id}`}>
        <h2 className={styles.firstText}>{props.name}</h2>
      </NavLink>
      <h2 className={styles.secondText}>{props.species}</h2>
      <h2 className={styles.thirdText}>{props.gender}</h2>
      <h3 className={styles.idCharacterText}>ID: #{props.id}</h3>
    </div>
  );
}

export const mapStateToProps = (state) => {
  return {
    ...state,
    myFavorites: [...state.myFavorites],
    allMyFavorites: [...state.allMyFavorites],
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (id) => dispatch(addFavorite(id)),
    removeFavorite: (id) => dispatch(removeFavorite(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
// eslint-disable-next-line linebreak-style
/* eslint-enable */
