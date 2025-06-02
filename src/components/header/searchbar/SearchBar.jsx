import { useState } from "react";
import Styles from "./SearchBar.module.css";

function SearchBar({ search, setSearch }) {
  const [input, setInput] = useState(search);

  // Handle Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearch(input);
    }
  };

  // Handle button click
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(input);
  };

  return (
    <div className={Styles.container}>
      {/* Search */}
      <div className={Styles.search}>
        <input
          type="text"
          placeholder="Search"
          className={Styles.searchBar}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className={`${Styles.searchButton} popup`}
          data-tooltip="Search"
          onClick={handleSearch}
        >
          <img src="./search.png" alt="search" className={Styles.searchIcon} />
        </button>
      </div>

      {/* Microphone */}
      <div>
        <button
          className={`${Styles.mic} btnActive popup`}
          data-tooltip="Search with your voice"
        >
          <img
            src="./microphone.png"
            alt="microphone"
            className={Styles.microphoneIcon}
          />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
