import { useState } from "react";

import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import Main from "../components/main/Main";

import Styles from "./Homepage.module.css";

function Homepage() {
  const [isExpandNav, setIsExpandNav] = useState(true);

  return (
    <div>
      <Header setIsExpandNav={setIsExpandNav} />
      <div className={Styles.app}>
        <SideBar isExpandNav={isExpandNav} />
        <Main isExpandNav={isExpandNav} />
      </div>
    </div>
  );
}

export default Homepage;
