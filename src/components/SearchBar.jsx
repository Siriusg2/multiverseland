
import styles from "./Cards.module.css";
export default function SearchBar(props) {
   return (
      < >
            <input type='search' className={styles.inputSearchBar} />
         <button onClick={props.onSearch} className={styles.buttonSearchBar}>Agregar</button>
      </>
   );
}
