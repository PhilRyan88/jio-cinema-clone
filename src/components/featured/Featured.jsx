import { useRef, useState, useEffect } from "react";
import styles from "./featured.module.css";
import FeaturedShow from "../featured-show/FeaturedShow.jsx";

const Featured = (props) => {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false); // Initially false to calculate on mount

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const updateButtonVisibility = () => {
    const el = scrollRef.current;
    if (!el) return;

    setShowLeft(el.scrollLeft > 0);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateButtonVisibility();
    el.addEventListener("scroll", updateButtonVisibility);
    window.addEventListener("resize", updateButtonVisibility); // Recalculate on resize too

    return () => {
      el.removeEventListener("scroll", updateButtonVisibility);
      window.removeEventListener("resize", updateButtonVisibility);
    };
  }, []);

  return (
    <section className={styles.featured}>
      <h1 className={styles.sectionTitle}>Hot Right Now 🔥</h1>

      {showLeft && (
        <button
          className={`${styles.navButton} ${styles.left}`}
          onClick={() => scroll("left")}
        >
          ◀
        </button>
      )}

      {showRight && (
        <button
          className={`${styles.navButton} ${styles.right}`}
          onClick={() => scroll("right")}
        >
          ▶
        </button>
      )}

      <div className={styles.shows} ref={scrollRef}>
        {props.movies.map((movie) => (
          <FeaturedShow key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default Featured;
