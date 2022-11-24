import styles from "./Cards.module.css";
export default function Card(props) {
   return (
      <div className={styles.divCard}>
         <button onClick={props.onClose} className={styles.button}>X</button>
          <img  src={props.image} alt="" />    
           <h2  className={styles.firstText}>{props.name}</h2>
    
         <h2 className={styles.secondText}>{props.species}</h2>
         <h2 className={styles.thirdText}>{props.gender}</h2>
        
      </div>
   );
}
