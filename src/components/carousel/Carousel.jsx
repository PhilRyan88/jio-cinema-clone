import { useState } from "react";
import styles from "./carousel.module.css";

import indiaVsEngland from "../../assets/indvseng.jpg";
import f1poster from "../../assets/f1_movie_poster.avif";
import pcposter from "../../assets/pirates.jpg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const posters = [
    {
      title: "India vs England - 1st ODI",
      img: indiaVsEngland,
      desc: "Watch the thrilling 1st ODI between India and England. Live now on Disney+ Hotstar.",
    },
    {
      title: "F1: Drive to Survive",
      img: f1poster,
      desc: "Behind the scenes of Formula One racing with teams, rivalries, and adrenaline.",
    },
    {
      title: "Pirates of the Caribbean",
      img: pcposter,
      desc: "Captain Jack Sparrow’s iconic journey across the seven seas.",
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? posters.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === posters.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.carouselWrapper}>
      <button className={styles.navButton} onClick={prevSlide}>
        ◀
      </button>
      <div className={styles.carousel}>
        {posters.map((poster, index) => {
          let position = styles.hidden;

          if (index === currentIndex) {
            position = styles.active;
          } else if (
            index ===
            (currentIndex === 0 ? posters.length - 1 : currentIndex - 1)
          ) {
            position = styles.left;
          } else if (
            index ===
            (currentIndex === posters.length - 1 ? 0 : currentIndex + 1)
          ) {
            position = styles.right;
          }

          return (
            <div className={`${styles.card} ${position}`} key={index}>
              <img
                src={poster.img}
                alt={poster.title}
                className={styles.cardImage}
              />
              <div className={styles.overlay}>
                <h3>{poster.title}</h3>
                <p>{poster.desc}</p>
                <button className={styles.watchButton}>Watch Now</button>
              </div>
            </div>
          );
        })}
      </div>
      <button className={styles.navButton} onClick={nextSlide}>
        ▶
      </button>
    </section>
  );
};

export default Carousel;
