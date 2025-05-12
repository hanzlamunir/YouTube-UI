import Styles from "./Footer.module.css";

const primary = [
  {
    id: 1,
    name: "About",
    href: "",
  },
  {
    id: 2,
    name: "Press",
    href: "",
  },
  {
    id: 3,
    name: "Copyright",
    href: "",
  },
  {
    id: 4,
    name: "Contact us",
    href: "",
  },
  {
    id: 5,
    name: "Creater",
    href: "",
  },
  {
    id: 6,
    name: "Advertise",
    href: "",
  },
  {
    id: 7,
    name: "Developers",
    href: "",
  },
];

const secondary = [
  {
    id: 11,
    name: "Terms",
    href: "",
  },
  {
    id: 12,
    name: "Privacy",
    href: "",
  },
  {
    id: 13,
    name: "Policy & Safety",
    href: "",
  },
  {
    id: 14,
    name: "How YouTube works",
    href: "",
  },
  {
    id: 15,
    name: "Test new features",
    href: "",
  },
];

function Footer() {
  return (
    <>
      <div className={Styles.primary}>
        {primary.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <div className={Styles.secondary}>
        {secondary.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <div className={Styles.copyright}>
        <div>© 2025 Google LLC</div>
      </div>
      ;
    </>
  );
}

function Item({ item }) {
  return (
    <a
      href={item.href}
      className={Styles.link}
      onClick={(e) => e.preventDefault()}
    >
      {item.name}
    </a>
  );
}

export default Footer;
