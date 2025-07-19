import React from "react";
import styles from "./show.module.css";

const Show = ({ movie }) => {
  return (
    <div className={styles.show}>
      <img src={movie.thumbnail} alt="Poster" />

      <div className={styles.overlay}>
        <div className={styles.movieTitle}>{movie.title}</div>
        <div className={styles.description}>{movie.description}</div>
        <button className={styles.watchButton}>Watch</button>
      </div>
    </div>
  );
};

export default Show;
