import styles from "./featured-show.module.css";

const FeaturedShow = (props) => {
  return (
    <>
      <div className={styles.featuredShow}>
        <img src={props.movie.thumbnail} alt="poster" />
        <div className={styles.movieTitle}>{props.movie.title}</div>
      </div>
    </>
  );
};

export default FeaturedShow;
