import React from "react";
import styles from "./Header.module.css";
import JCLogo from "../../assets/jc_logo_v2.svg";
import crown from "../../assets/crown.svg";
import searchIcon from "../../assets/ic_search.svg";
import voiceSearchIcon from "../../assets/voice-search.svg";
import userIcon from "../../assets/clipart1128911.png";

const Header = () => {
  let navLinks = ["Home", "Sports", "Movies", "TV Shows", "More"];

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navigation}>
          <div className={styles.logo}>
            <img src={JCLogo} alt="Jio Cinima Logo" />
            <div className={styles.premium}>
              <img src={crown} alt="Crown image" />
              <p>premium</p>
            </div>
          </div>

          <div className={styles.navLinks}>
            {navLinks.map((link) => {
              return <li className={styles.navLink}>{link}</li>;
            })}
          </div>
        </nav>
        <div className={styles.search}>
          <div className={styles.searchBox}>
            <div className={styles.headerIcon}>
              <img src={searchIcon} alt="Search Icon" />
            </div>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Movies , Shows and More"
            />

            <div className={styles.headerIcon}>
              <img src={voiceSearchIcon} alt="Mike Icon" />
            </div>
          </div>
          <img src={userIcon} alt="User Icon" className={styles.userIcon} />
        </div>
      </header>
    </>
  );
};

export default Header;
