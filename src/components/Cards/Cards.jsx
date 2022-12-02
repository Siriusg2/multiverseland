import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  return (
    <div className={styles.divCards}>
      {props.characters.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          onClose={props.onClose}
          name={card.name}
          species={card.species}
          gender={card.gender}
          image={card.image}
        />
      ))}
    </div>
  );
}
