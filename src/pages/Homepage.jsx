import { useState } from "react";

import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import Main from "../components/main/Main";

import Styles from "./Homepage.module.css";

function Homepage() {
  const [isExpandNav, setIsExpandNav] = useState(false);
  const [search, setSearch] = useState(""); // <-- Add search state

  return (
    <div>
      <Header
        setIsExpandNav={setIsExpandNav}
        search={search}
        setSearch={setSearch}
      />
      <div className={Styles.app}>
        <SideBar isExpandNav={isExpandNav} />
        <Main isExpandNav={isExpandNav} search={search} />
      </div>
    </div>
  );
}

export default Homepage;
