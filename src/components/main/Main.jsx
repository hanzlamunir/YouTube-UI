import ChipBar from "./chipbar/ChipBar";
import { useAuth } from "../../contexts/FakeAuthContext";

import Styles from "./Main.module.css";

const videoThumbnail = [
  {
    id: 70,
    herf: "",
    image: "./video-image/image1.jpg",
    icon: "./subsciption-account-icon.png",
    meuIcon: "./menu-vertical-icon.png",
    heading: "Top Cars in Pakistan? Vehicles In Veranda Showroom Tour",
    channel: "PakWeels.com",
    views: "264K views",
    time: "5 days ago",
  },
  {
    id: 71,
    herf: "",
    image: "./video-image/image2.jpg",
    icon: "./subsciption-account-icon.png",
    meuIcon: "./menu-vertical-icon.png",
    heading:
      "🔴 ARY NEWS LIVE | Latest Pakistan News 𝟐𝟒/𝟕 | Headlines, Bulletins, Breaking News",
    channel: "ARY News",
    views: "41K watching",
    live: true,
    liveIcon: "./youtube-live-icon.png",
  },
  {
    id: 74,
    herf: "",
    image: "./video-image/image5.jpg",
    icon: "./subsciption-account-icon.png",
    meuIcon: "./menu-vertical-icon.png",
    heading: "Koenigsegg Jesko Absolut v Regera: DRAG RACE",
    channel: "carwow",
    views: "2.5M views",
    time: "8 days ago",
  },
  {
    id: 73,
    herf: "",
    image: "./video-image/image4.jpg",
    icon: "./subsciption-account-icon.png",
    meuIcon: "./menu-vertical-icon.png",
    heading: "Doctors aur Patients",
    channel: "Sharum Ki Sketchbook",
    views: "3.2M views",
    time: "10 months ago",
  },
  {
    id: 75,
    herf: "",
    image: "./video-image/image6.jpg",
    icon: "./subsciption-account-icon.png",
    meuIcon: "./menu-vertical-icon.png",
    heading: "FIRST DRIVE: Lamborghini Temerario – 10,000rpm & 907bhp!",
    channel: "Top Gear",
    views: "479K views",
    time: "2 weeks ago",
  },
  {
    id: 76,
    herf: "",
    image: "./video-image/image7.jpg",
    icon: "./subsciption-account-icon.png",
    meuIcon: "./menu-vertical-icon.png",
    heading: "KIA Sorento 4th Gen 1.6 HEV AWD | First Look Review | PakWheels",
    channel: "PakWheels.com",
    views: "209K views",
    time: "1 day ago",
  },
  {
    id: 72,
    herf: "",
    image: "./video-image/image3.jpg",
    icon: "./subsciption-account-icon.png",
    meuIcon: "./menu-vertical-icon.png",
    heading:
      "PCB Archive - Spin Magic of Saeed Ajmal in Sharjah | 3rd ODI | PAK vs AUS 2012 Series | M6B2A",
    channel: "Pakistan Cricket",
    views: "637 views",
    time: "12 days ago",
  },
  {
    id: 77,
    herf: "",
    image: "./video-image/image8.jpg",
    icon: "./subsciption-account-icon.png",
    meuIcon: "./menu-vertical-icon.png",
    heading: "Prestige Car Showroom Tour!",
    channel: "PakWheels.com",
    views: "248K views",
    time: "7 day ago",
  },
  {
    id: 78,
    herf: "",
    image: "./video-image/image9.jpg",
    icon: "./subsciption-account-icon.png",
    meuIcon: "./menu-vertical-icon.png",
    heading: "Built vs Bought - drag racing",
    channel: "Wheels",
    views: "586K views",
    time: "1 month ago",
  },
];

function Main({ isExpandNav }) {
  const { isAuthenticated } = useAuth();

  return (
    <div className={isExpandNav ? Styles.main : Styles.left}>
      <ChipBar isExpandNav={isExpandNav} />
      <div className={Styles.container}>
        <div className={Styles.subContainer}>
          {isAuthenticated ? (
            videoThumbnail.map((item) => <Item key={item.id} item={item} />)
          ) : (
            <div className={Styles.messageBox}>
              <div className={Styles.message}>
                <h1>Try searching to get started</h1>
                <h3>
                  Start watching videos to help us build a feed of videos you'll
                  love.
                </h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Item({ item }) {
  return (
    <div className={Styles.contentContainer}>
      <a
        href={item.herf}
        className={Styles.content}
        onClick={(e) => e.preventDefault()}
      >
        <img src={item.image} alt={item.channel} className={Styles.image} />
      </a>
      <div className={Styles.details}>
        <img
          src={item.icon}
          alt={item.channel}
          className={item.live ? Styles.liveChannelIcon : Styles.channelIcon}
        />
        <div className={Styles.info}>
          <h3 className={Styles.heading}>{item.heading}</h3>
          <span className={Styles.channelName}>{item.channel}</span>
          <div className={Styles.con}>
            <span className={Styles.views}>{item.views}</span>
            {item.time && <div className={Styles.dot}></div>}
            <span className={Styles.time}>{item.time}</span>
          </div>
          {item.live && (
            <div className={Styles.live}>
              <img src={item.liveIcon} className={Styles.liveIcon} />
              <p>LIVE</p>
            </div>
          )}
        </div>
        <button className={Styles.menu}>
          <img
            src={item.meuIcon}
            alt={item.channel}
            className={Styles.menuIcon}
          />
        </button>
      </div>
    </div>
  );
}

export default Main;
