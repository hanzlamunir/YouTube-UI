function Item({ title, items, selectedBtn, setSelectedBtn }) {
  return (
    <div className="container">
      {title && <h2 className="title">{title}</h2>}
      <div className="subContainer">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`btn btnHover popup ${
              item.id === selectedBtn ? "btnActive" : ""
            }`}
            data-tooltip={item.name}
            onClick={(e) => {
              e.preventDefault();
              setSelectedBtn(item.id);
            }}
          >
            <img src={item.image} alt={item.name} className="icon" />
            <span className="name">{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Item;
