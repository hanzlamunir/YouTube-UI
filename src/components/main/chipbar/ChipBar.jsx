import chips from "./chip";

import Styles from "./ChipBar.module.css";

function ChipBar({ isExpandNav, selectedChip, setSelectedChip }) {
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
