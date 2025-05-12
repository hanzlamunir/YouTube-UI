import Styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={Styles.container}>
      {/* Search */}
      <div className={Styles.search}>
        <input type="text" placeholder="Search" className={Styles.searchBar} />
        <button
          className={`${Styles.searchButton} popup`}
          data-tooltip="Search"
        >
          <img
            src="/public/search.png"
            alt="search"
            className={Styles.searchIcon}
          />
        </button>
      </div>

      {/* Microphone */}
      <div>
        <button
          className={`${Styles.mic} btnActive popup`}
          data-tooltip="Search with your voice"
        >
          <img
            src="/public/microphone.png"
            alt="microphone"
            className={Styles.microphoneIcon}
          />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
