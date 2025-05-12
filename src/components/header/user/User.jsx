import { useState } from "react";
import { NavLink } from "react-router-dom";

import CreateBtn from "./CreateBtn";
import { useAuth } from "../../../contexts/FakeAuthContext";

import Styles from "./User.module.css";

function User() {
  const { user, isAuthenticated, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function handleLogout() {
    logout();
  }

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <>
      {isAuthenticated ? (
        <div className={Styles.container}>
          <CreateBtn />
          <a
            className={`${Styles.notification} btnHover popup`}
            data-tooltip="Notifications"
          >
            <img
              src="/public/notification-icon.png"
              alt="Notification"
              className={Styles.notificationIcon}
            />
          </a>
          <div className={Styles.avatar} onClick={toggleDropdown}>
            <img
              src={user.avatar}
              alt={user.name}
              className={Styles.avatarIcon}
            />
          </div>
          {isDropdownOpen && (
            <div className={Styles.dropdown}>
              <div className={Styles.infoContainer}>
                <img
                  src={user.avatar}
                  alt={user.name}
                  className={Styles.avatarIcon}
                />
                <div className={Styles.info}>
                  <span>{user.name}</span>
                  <span>{user.email}</span>
                </div>
              </div>
              <a
                className={`${Styles.dropdownItem} btnHover`}
                onClick={handleLogout}
              >
                <img
                  src="/public/sign-out.png"
                  alt="signout"
                  className={Styles.signoutIcon}
                />
                <span className={Styles.signout}>Sign out</span>
              </a>
            </div>
          )}
        </div>
      ) : (
        <div className={Styles.signin}>
          <div className={`${Styles.menu} popup`} data-tooltip="Settings">
            <img
              src="/public/menu-vertical-icon.png"
              alt="menu"
              className={Styles.menuIcon}
            />
          </div>
          <div className={Styles.signinBtn}>
            <NavLink to="/login" className={`${Styles.btn} btnHover`}>
              <img
                src="/public/account-icon.png"
                alt="plus"
                className={Styles.icon}
              />
              <h3 className={Styles.name}> Sign in</h3>
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}

export default User;
