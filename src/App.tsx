import styles from "./App.module.css";
import { FcSearch } from "react-icons/fc";

function App() {
  // const handleOnSubmit = () => {
  //   alert("Hello");
  // };

  return (
    <div className={styles.App}>
      <h1 className={styles.heading}>Woordle</h1>
      <div className={styles.wrap}>
        <div className={styles.search}>
          <input
            type="text"
            name="name"
            className={styles.synonymTextInput}
            placeholder="Type a word to find synonyms?"
          />
          <button type="submit" className={styles.searchButton}>
            <FcSearch />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
