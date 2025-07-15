import { useState } from "react";
import styles from "./tags.module.css";

const Tags = () => {
  let [tags, setTags] = useState([
    "For You",
    "premium",
    "Laughter Chefs",
    "MTV Roadies XX",
    "News",
    "Big Boss",
    "BBK",
    "Cricket",
    "Free Movie",
    "Kids & Family",
    "AUS VS IND",
    "Studios",
    "FREE Anime",
    "ISL",
    "Top Ten",
    "TATA IPL",
    "Coming Soon",
    "Creator Adda",
    "Tennis",
  ]);
  return (
    <>
      <div className={styles.tags}>
        {tags.map((tag) => {
          return <p className={styles.tag}>{tag}</p>;
        })}
      </div>
    </>
  );
};

export default Tags;
