import Card from "./Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  return (
    <div className={styles.divCards}>
      {props.characters.map((card) => (
        <Card
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
