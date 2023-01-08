/* eslint-disable */
import Card from "../Card/Card";
import styles from "./Cards.module.css";
import { useSelector, useDispatch } from "react-redux";
import { removeCard } from "../../redux/actions";

export default function Cards(props) {
const allCharacters = useSelector((state) => state.allCharacters);
const dispatch = useDispatch()
  return (
    <div className={styles.divCards}>
      {allCharacters?.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          removeCard={removeCard}
          name={card.name}
          species={card.species}
          gender={card.gender}
          image={card.image}
        />
      ))}
    </div>
  );
}
// eslint-disable-next-line linebreak-style
/* eslint-enable */
