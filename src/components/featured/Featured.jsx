import styles from "./featured.module.css";
import FeaturedShow from "../featured-show/FeaturedShow.jsx";
const Featured = () => {
  return (
    <>
      <section className={styles.featured}>
        <h1 className={styles.sectionTitle}>Hot Right Now &#128293;</h1>
        <div className={styles.shows}>
          <FeaturedShow />
          <FeaturedShow />
          <FeaturedShow />
        </div>
      </section>
    </>
  );
};

export default Featured;
