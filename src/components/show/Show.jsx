import React, { useState } from "react";
import styles from "./show.module.css";

const Show = ({ movie }) => {
  const [showTrailer, setShowTrailer] = useState(false);

  const getYouTubeEmbedUrl = (url) => {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  return (
    <>
      <div className={styles.show}>
        <img src={movie.thumbnail} alt="Poster" />

        <div className={styles.overlay}>
          <div className={styles.movieTitle}>{movie.title}</div>
          <div className={styles.description}>{movie.description}</div>
          <button
            className={styles.watchButton}
            onClick={() => setShowTrailer(true)}
          >
            Watch
          </button>
        </div>
      </div>

      {showTrailer && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setShowTrailer(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              src={getYouTubeEmbedUrl(movie.trailer)}
              title="YouTube trailer"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Show;
