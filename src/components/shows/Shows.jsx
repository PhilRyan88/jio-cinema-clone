import styles from "./shows.module.css";
import Show from "../show/Show";
import { useRef } from "react";

const Shows = ({ title, movies }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 300;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={styles.shows}>
      <h1>{title}</h1>

      <button
        className={`${styles.navButton} ${styles.left}`}
        onClick={() => scroll("left")}
      >
        &#8249;
      </button>
      <button
        className={`${styles.navButton} ${styles.right}`}
        onClick={() => scroll("right")}
      >
        &#8250;
      </button>

      <div className={styles.showsParent} ref={scrollRef}>
        {movies.map((movie) => (
          <Show key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default Shows;
