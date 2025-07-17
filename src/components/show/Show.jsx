import React from "react";
import styles from "./show.module.css";
const Show = (props) => {
  return (
    <>
      <div className={styles.show}>
        <img src={props.movie.thumbnail} alt="Poster" />

        <div className={styles.movieTitle}>{props.movie.name}</div>
      </div>
    </>
  );
};

export default Show;
