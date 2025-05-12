import { useState } from "react";

import Styles from "./ChipBar.module.css";

const chips = [
  {
    id: 60,
    name: "All",
    herf: "",
  },
  {
    id: 61,
    name: "Live",
    herf: "",
  },
  {
    id: 62,
    name: "News",
    herf: "",
  },
  {
    id: 63,
    name: "Gaming",
    herf: "",
  },
  {
    id: 64,
    name: "Music",
    herf: "",
  },
  {
    id: 65,
    name: "Cars",
    herf: "",
  },
  {
    id: 66,
    name: "Recently uploaded",
    herf: "",
  },
  {
    id: 67,
    name: "New to You",
    herf: "",
  },
  {
    id: 68,
    name: "Watched",
    herf: "",
  },
];

function ChipBar({ isExpandNav }) {
  const [selectedChip, setSelectedChip] = useState(60);

  return (
    <div className={isExpandNav ? Styles.chipbar : Styles.left}>
      <div className={Styles.container}>
        <div className={Styles.subContainer}>
          {chips.map((item) => (
            <ChipItem
              key={item.id}
              item={item}
              isActive={item.id === selectedChip}
              setSelectedChip={setSelectedChip}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ChipItem({ item, isActive, setSelectedChip }) {
  return (
    <a
      href={item.herf}
      className={`${Styles.chipBtn} ${
        isActive ? Styles.activeChip : "btnActive"
      }`}
      onClick={(e) => {
        e.preventDefault();
        setSelectedChip(item.id);
      }}
    >
      <span className={`${Styles.name} popup`} data-tooltip={item.name}>
        {item.name}
      </span>
    </a>
  );
}

export default ChipBar;
