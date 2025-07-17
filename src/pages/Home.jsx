import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Tags from "../components/tags/Tags";
import Channels from "../components/channels/Channels";
import Carousels from "../components/carousel/Carousel";
import Featured from "../components/featured/Featured";
import Shows from "../components/shows/Shows";
function Home() {
  let [movies, setMovies] = useState([]);
  let [featuredMovies, setFeaturedMovies] = useState([]);
  let [actionMovies, setActionMovies] = useState([]);
  let [malayalamMovies, setMalayalamMovies] = useState([]);
  let [topMovies, setTopMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let movieResponse = await fetch("http://localhost:3000/movies");
        let moviesData = await movieResponse.json();
        setMovies(moviesData);

        // Featured Movies
        const featMovies = moviesData.filter((movie) => movie.featured);
        setFeaturedMovies(featMovies.slice(0, 4));

        // Action Movies
        const actMovies = moviesData.filter((movie) =>
          movie.genre.includes("Action")
        );
        setActionMovies(actMovies.slice(0, 6));

        // Malayalam Movies
        const maMovies = moviesData.filter((movie) =>
          movie.language.includes("Malayalam")
        );
        setMalayalamMovies(maMovies.slice(0, 6));

        // Top Rated Movies
        const topRatedMovies = moviesData.filter(
          (movie) => movie.imdbRating >= 8.5
        );
        setTopMovies(topRatedMovies.slice(0, 6));
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Header />
      <Tags />
      <Carousels />
      <Channels />
      <Featured movies={featuredMovies} />

      <Shows title="Action Movies" movies={actionMovies} />
      <Shows title="Malayalam Movies" movies={malayalamMovies} />
      <Shows title="Top Rated Movies" movies={topMovies} />
    </>
  );
}

export default Home;
