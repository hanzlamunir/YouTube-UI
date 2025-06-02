import { useState } from "react";

import ChipBar from "./chipbar/ChipBar";
import chip from "./chipbar/chip";
import { useAuth } from "../../contexts/FakeAuthContext";

import Styles from "./Main.module.css";

const videoThumbnail = [
  {
    id: 70,
    herf: "",
    image: "./video-image/image1.jpg",
    icon: "./subsciption-account-icon.png",
    heading: "Top Cars in Pakistan? Vehicles In Veranda Showroom Tour",
    channel: "PakWeels.com",
    views: "264K views",
    time: "5 days ago",
    category: "cars",
  },
  {
    id: 71,
    herf: "",
    image: "./video-image/image2.jpg",
    icon: "./subsciption-account-icon.png",
    heading:
      "🔴 ARY NEWS LIVE | Latest Pakistan News 𝟐𝟒/𝟕 | Headlines, Bulletins, Breaking News",
    channel: "ARY News",
    views: "41K watching",
    type: "live",
    category: "news",
  },
  {
    id: 74,
    herf: "",
    image: "./video-image/image5.jpg",
    icon: "./subsciption-account-icon.png",
    heading: "Koenigsegg Jesko Absolut v Regera: DRAG RACE",
    channel: "carwow",
    views: "2.5M views",
    time: "8 days ago",
    category: "cars",
  },
  {
    id: 73,
    herf: "",
    image: "./video-image/image4.jpg",
    icon: "./subsciption-account-icon.png",
    heading: "Doctors aur Patients",
    channel: "Sharum Ki Sketchbook",
    views: "3.2M views",
    time: "10 months ago",
    category: "entertainment",
  },
  {
    id: 75,
    herf: "",
    image: "./video-image/image6.jpg",
    icon: "./subsciption-account-icon.png",
    heading: "FIRST DRIVE: Lamborghini Temerario – 10,000rpm & 907bhp!",
    channel: "Top Gear",
    views: "479K views",
    time: "2 weeks ago",
    category: "cars",
  },
  {
    id: 76,
    herf: "",
    image: "./video-image/image7.jpg",
    icon: "./subsciption-account-icon.png",
    heading: "KIA Sorento 4th Gen 1.6 HEV AWD | First Look Review | PakWheels",
    channel: "PakWheels.com",
    views: "209K views",
    time: "1 day ago",
    category: "cars",
  },
  {
    id: 72,
    herf: "",
    image: "./video-image/image3.jpg",
    icon: "./subsciption-account-icon.png",
    heading:
      "PCB Archive - Spin Magic of Saeed Ajmal in Sharjah | 3rd ODI | PAK vs AUS 2012 Series | M6B2A",
    channel: "Pakistan Cricket",
    views: "637 views",
    time: "12 days ago",
    category: "sports",
  },
  {
    id: 77,
    herf: "",
    image: "./video-image/image8.jpg",
    icon: "./subsciption-account-icon.png",
    heading: "Prestige Car Showroom Tour!",
    channel: "PakWheels.com",
    views: "248K views",
    time: "7 day ago",
    category: "cars",
  },
  {
    id: 78,
    herf: "",
    image: "./video-image/image9.jpg",
    icon: "./subsciption-account-icon.png",
    heading: "Built vs Bought - drag racing",
    channel: "Wheels",
    views: "586K views",
    time: "1 month ago",
    category: "cars",
  },
];

function timeToMinutes(time = "") {
  if (!time) return Infinity;
  const [num, unit] = time.split(" ");
  const n = parseInt(num, 10);
  if (unit?.startsWith("minute")) return n;
  if (unit?.startsWith("hour")) return n * 60;
  if (unit?.startsWith("day")) return n * 60 * 24;
  if (unit?.startsWith("week")) return n * 60 * 24 * 7;
  if (unit?.startsWith("month")) return n * 60 * 24 * 30;
  if (unit?.startsWith("year")) return n * 60 * 24 * 365;
  return Infinity;
}

function Main({ isExpandNav, search }) {
  const { isAuthenticated } = useAuth();
  const [selectedChip, setSelectedChip] = useState(60);

  const selectedChipObj = chip.find((chip) => chip.id === selectedChip);

  // let filteredVideos;

  // if (selectedChipObj?.category?.toLowerCase() === "recently uploaded") {
  //   filteredVideos = videoThumbnail
  //     .filter((v) => v.time)
  //     .sort((a, b) => timeToMinutes(a.time) - timeToMinutes(b.time));
  // } else {
  //   filteredVideos =
  //     !selectedChipObj || selectedChipObj.category === "all"
  //       ? videoThumbnail
  //       : videoThumbnail.filter(
  //           (video) =>
  //             (video.category &&
  //               video.category.toLowerCase() ===
  //                 selectedChipObj.category.toLowerCase()) ||
  //             (video.type &&
  //               video.type.toLowerCase() ===
  //                 selectedChipObj.category.toLowerCase())
  //         );
  // }

  let filteredVideos =
    !selectedChipObj || selectedChipObj.category === "all"
      ? videoThumbnail
      : videoThumbnail.filter(
          (video) =>
            video.category &&
            video.category.toLowerCase() ===
              selectedChipObj.category.toLowerCase()
        );

  // Filter by search value (case-insensitive)
  if (search.trim() !== "") {
    filteredVideos = filteredVideos.filter((video) =>
      video.heading.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Sort for "recently uploaded"
  if (selectedChipObj?.category?.toLowerCase() === "recently uploaded") {
    filteredVideos = filteredVideos
      .filter((v) => v.time)
      .sort((a, b) => timeToMinutes(a.time) - timeToMinutes(b.time));
  }

  return (
    <div className={isExpandNav ? Styles.main : Styles.left}>
      {isAuthenticated ? (
        <ChipBar
          isExpandNav={isExpandNav}
          selectedChip={selectedChip}
          setSelectedChip={setSelectedChip}
        />
      ) : null}
      <div className={Styles.container}>
        <div className={Styles.subContainer}>
          {isAuthenticated ? (
            filteredVideos.map((item) => <Item key={item.id} item={item} />)
          ) : (
            // videoThumbnail.map((item) => <Item key={item.id} item={item} />)
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
          className={
            item.type === "live" ? Styles.liveChannelIcon : Styles.channelIcon
          }
        />
        <div className={Styles.info}>
          <h3 className={Styles.heading}>{item.heading}</h3>
          <span className={Styles.channelName}>{item.channel}</span>
          <div className={Styles.con}>
            <span className={Styles.views}>{item.views}</span>
            {item.time && <div className={Styles.dot}></div>}
            <span className={Styles.time}>{item.time}</span>
          </div>
          {item.type === "live" && (
            <div className={Styles.live}>
              <img src="./youtube-live-icon.png" className={Styles.liveIcon} />
              <p>LIVE</p>
            </div>
          )}
        </div>
        <button className={Styles.menu}>
          <img
            src="./menu-vertical-icon.png"
            alt={item.channel}
            className={Styles.menuIcon}
          />
        </button>
      </div>
    </div>
  );
}

export default Main;
