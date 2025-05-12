import SearchBar from "./searchbar/SearchBar";
import User from "./user/User";

import Styles from "./Header.module.css";

function Header({ setIsExpandNav }) {
  function handleNav() {
    setIsExpandNav((nav) => !nav);
  }

  return (
    <div className={Styles.header}>
      <div className={Styles.container}>
        {/* Hamburger Nav Icon */}
        <div>
          <button
            className={`${Styles.hamburgerButton} btnHover`}
            onClick={handleNav}
          >
            <div className={Styles.hamburgerIcon}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </button>
        </div>

        {/* YouTube Logo */}
        <div>
          <a
            className={`${Styles.logo} popup`}
            href="/"
            data-tooltip="YouTube Home"
          >
            <img
              src="/public/yt_logo_rgb_dark.png"
              alt="Logo"
              className={Styles.logoImage}
            />
            <span className={Styles.logoTopbar}>PK</span>
          </a>
        </div>
      </div>
      <SearchBar />
      <User />
    </div>
  );
}

export default Header;
