import styles from "./App.module.css";
import { FcSearch } from "react-icons/fc";
import { useState } from "react";

function App() {
  const [word, setWord] = useState<string>("");

  const onSearch = () => {
    fetch(`https://api.datamuse.com/words?rel_syn=${word}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div className={styles.App}>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>Woordle</h1>
      </div>
      <div className={styles.wrap}>
        <div className={styles.search}>
          <input
            type="text"
            name="name"
            className={styles.synonymTextInput}
            placeholder="Type a word to find synonyms?"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <button
            type="submit"
            className={styles.searchButton}
            onClick={onSearch}
          >
            <FcSearch />
          </button>
        </div>

        <div className={styles.resultContainer}>
          <div className={styles.results}>
            <div className={styles.result}>Hello</div>
            <div className={styles.result}>Hello</div>
            <div className={styles.result}>Hello</div>
            <div className={styles.result}>Hello</div>
            <div className={styles.result}>Hello</div>
            <div className={styles.result}>Hello</div>
            <div className={styles.result}>Hello</div>
            <div className={styles.result}>Hello</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
