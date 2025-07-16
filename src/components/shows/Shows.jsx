import styles from "./shows.module.css";
import Show from "../show/Show";
const Shows = () => {
  return (
    <section className={styles.shows}>
      <h1>Hindi Movies</h1>
      <div className={styles.showsParent}>
        <Show />
        <Show />
        <Show />
        <Show />
        <Show />
        <Show />
      </div>
    </section>
  );
};

export default Shows;
