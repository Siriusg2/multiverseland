import "./App.css";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import characters from "./data.js";
import styles from "./components/Cards.module.css";

function App() {
  return (
    <>
      <div className={styles.divCards}>
        <Cards characters={characters} />
      </div>
      <hr />
      <div className={styles.divSearchBar}>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div>
    </>
  );
}

export default App;
