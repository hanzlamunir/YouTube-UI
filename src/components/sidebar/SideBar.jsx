import { NavLink } from "react-router-dom";
import { useState } from "react";

import {
  SUBSRIPTION_DATA,
  EXPLORER_DATA,
  YOUTUBEOTHER_DATA,
  SETTINGS_DATA,
} from "./data/data";

import Nav from "./nav/Nav";
import Sections from "./sections/Sections";
import Item from "./sections/Item";
import Footer from "./footer/Footer";
import { useAuth } from "../../contexts/FakeAuthContext";

import Styles from "./SideBar.module.css";

function SideBar({ isExpandNav }) {
  const [selectedBtn, setSelectedBtn] = useState(1);

  const { isAuthenticated } = useAuth();

  return (
    <div className={isExpandNav ? Styles.sidebar : Styles.navbar}>
      <Nav
        isExpandNav={isExpandNav}
        selectedBtn={selectedBtn}
        setSelectedBtn={setSelectedBtn}
      />
      {isExpandNav ? (
        <>
          {isAuthenticated ? (
            <Sections>
              <Item
                title="Subscriptions"
                items={SUBSRIPTION_DATA}
                selectedBtn={selectedBtn}
                setSelectedBtn={setSelectedBtn}
              />
            </Sections>
          ) : (
            <div className={Styles.signinContainer}>
              <div className={Styles.signin}>
                <span>Sign in to like videos, comment, and subscribe.</span>
                <div className={Styles.signinBtn}>
                  <NavLink to="/login" className={`${Styles.btn} btnHover`}>
                    <img
                      src="./account-icon.png"
                      alt="plus"
                      className={Styles.icon}
                    />
                    <h3 className={Styles.name}> Sign in</h3>
                  </NavLink>
                </div>
              </div>
            </div>
          )}
          <Sections>
            <Item
              title="Explore"
              items={EXPLORER_DATA}
              selectedBtn={selectedBtn}
              setSelectedBtn={setSelectedBtn}
            />
          </Sections>
          <Sections>
            <Item
              title="More From YouTube"
              items={YOUTUBEOTHER_DATA}
              selectedBtn={selectedBtn}
              setSelectedBtn={setSelectedBtn}
            />
          </Sections>
          <Sections>
            <Item
              items={SETTINGS_DATA}
              selectedBtn={selectedBtn}
              setSelectedBtn={setSelectedBtn}
            />
          </Sections>
          <Footer />
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default SideBar;
