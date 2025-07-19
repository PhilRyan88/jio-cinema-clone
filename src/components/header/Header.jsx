import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import JCLogo from "../../assets/jc_logo_v2.svg";
import crown from "../../assets/crown.svg";
import searchIcon from "../../assets/ic_search.svg";
import voiceSearchIcon from "../../assets/voice-search.svg";
import userIcon from "../../assets/clipart1128911.png";
import Show from "../show/Show";

const Header = (props) => {
  let navLinks = ["Home", "Sports", "Movies", "TV Shows", "More"];
  let [searchTitle, setSearchTitle] = useState("");
  let [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    if (searchTitle !== "") {
      let filterMovies = props.movies.filter((movie) => {
        return movie.title.toUpperCase().includes(searchTitle.toUpperCase());
      });

      setFilteredMovies(filterMovies);
    } else {
      setFilteredMovies([]);
    }
  }, [searchTitle, props.movies]);
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
              onChange={(event) => {
                setSearchTitle(event.target.value);
              }}
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

      {filteredMovies.length !== 0 ? (
        <div className={styles.searchResults}>
          {filteredMovies.map((movie) => {
            return <Show movie={movie} />;
          })}
        </div>
      ) : null}
    </>
  );
};

export default Header;
