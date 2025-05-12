import Styles from "./You.module.css";

const youItems = [
  {
    id: 10,
    image: "/public/forward-icon.png",
    name: "You",
    href: "",
    type: "icon/right",
  },
  {
    id: 11,
    image: "/public/youtube-history-icon.png",
    name: "History",
    href: "",
  },
  {
    id: 12,
    image: "/public/playlist-icon.png",
    name: "Playlists",
    href: "",
  },
  {
    id: 13,
    image: "/public/youtube-your_videos-icon.png",
    name: "Your videos",
    href: "",
  },
  {
    id: 14,
    image: "/public/watch_later-icon.png",
    name: "Watch later",
    href: "",
  },
  {
    id: 15,
    image: "/public/like.png",
    name: "Liked videos",
    href: "",
  },
];

function You({ selectedBtn, setSelectedBtn }) {
  return (
    <div className={Styles.container}>
      {youItems.map((item) => (
        <a
          href={item.href}
          key={item.id}
          className={`btn btnHover popup ${
            item.id === selectedBtn ? "btnActive" : ""
          }`}
          data-tooltip={item.name}
          onClick={(e) => {
            e.preventDefault();
            setSelectedBtn(item.id);
          }}
        >
          {item.type ? (
            <>
              <h3 className={Styles.name}>{item.name}</h3>
              <img src={item.image} alt={item.name} className={Styles.icon} />
            </>
          ) : (
            <>
              <img src={item.image} alt={item.name} className="icon" />
              <h3 className="name">{item.name}</h3>
            </>
          )}
        </a>
      ))}
    </div>
  );
}

export default You;
