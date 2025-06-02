import You from "./You";

import Styles from "./Nav.module.css";

const navItems = [
  {
    id: 1,
    image: "./home-icon.png",
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    image: "./youtube-shorts-icon.png",
    name: "Shorts",
    href: "",
  },
  {
    id: 3,
    image: "./youtube-subscription-icon.png",
    name: "Subscriptions",
    href: "",
  },
  {
    id: 4,
    image: "./youtube-music-icon.png",
    name: "YouTube Music",
    href: "",
  },
  {
    id: 5,
    image: "./subsciption-account-icon.png",
    name: "You",
  },
];

function Nav({ isExpandNav, selectedBtn, setSelectedBtn }) {
  const filteredNavItems = isExpandNav ? navItems.slice(0, -1) : navItems;

  return (
    <div className={isExpandNav ? "container" : ""}>
      {/* Nav */}
      <div className={isExpandNav ? Styles.navContainer : ""}>
        {/* isShrinkNav */}
        {filteredNavItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            isExpandNav={isExpandNav}
            isActive={item.id === selectedBtn}
            setSelectedBtn={setSelectedBtn}
          />
        ))}
        {/* You */}
        {isExpandNav && (
          <You selectedBtn={selectedBtn} setSelectedBtn={setSelectedBtn} />
        )}
      </div>
    </div>
  );
}

function Item({ item, isExpandNav, isActive, setSelectedBtn }) {
  function handleClick(e) {
    e.preventDefault();
    setSelectedBtn(item.id);
  }

  return (
    <a
      href={item.href}
      className={`${
        isExpandNav ? "btn btnHover popup" : `${Styles.navbarBtn} btnHover popup`
      } ${isActive ? "btnActive" : ""}`}
      data-tooltip={item.name}
      onClick={handleClick}
    >
      <img
        src={item.image}
        alt={item.name}
        className={isExpandNav ? "icon" : Styles.navbarIcon}
      />
      <span className={isExpandNav ? "name" : Styles.navbarName}>
        {item.name}
      </span>
    </a>
  );
}

export default Nav;
