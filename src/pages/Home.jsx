import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Tags from "../components/tags/Tags";
import Channels from "../components/channels/Channels";
import Carousels from "../components/carousel/Carousel";
import Featured from "../components/featured/Featured";
import Shows from "../components/shows/Shows";
function Home(props) {
  let [movies, setMovies] = useState([]);
  let [featuredMovies, setFeaturedMovies] = useState([]);
  let [actionMovies, setActionMovies] = useState([]);
  let [hindiMovies, setHindiMovies] = useState([]);
  let [tamilMovies, setTamilMovies] = useState([]);
  let [malayalamMovies, setMalayalamMovies] = useState([]);
  let [indianMovies, setIndianMovies] = useState([]);

  let [topMovies, setTopMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let movieResponse = await fetch("http://localhost:3000/movies");
        let moviesData = await movieResponse.json();
        setMovies(moviesData);

        // Featured Movies
        const featMovies = moviesData.filter((movie) => movie.featured);
        setFeaturedMovies(featMovies);

        // Action Movies
        const actMovies = moviesData.filter((movie) =>
          movie.genre.includes("Action")
        );
        setActionMovies(actMovies);
        // Hindi Movies
        const hiMovies = moviesData.filter((movie) =>
          movie.language.includes("Hindi")
        );
        setHindiMovies(hiMovies);
        // Tamil Movies
        const taMovies = moviesData.filter((movie) =>
          movie.language.includes("Tamil")
        );
        setTamilMovies(taMovies);
        // Malayalam Movies
        const maMovies = moviesData.filter((movie) =>
          movie.language.includes("Malayalam")
        );
        setMalayalamMovies(maMovies);

        // Top Rated Movies
        const topRatedMovies = moviesData.filter(
          (movie) => movie.imdbRating >= 8.5
        );
        setTopMovies(topRatedMovies);
        // Indian Movies
        const indMovies = moviesData.filter((movie) =>
          movie.country.includes("India")
        );
        setIndianMovies(indMovies);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Header movies={movies} />
      <Tags />
      <Carousels />
      <Channels />
      <Featured movies={featuredMovies} />

      <Shows title="Popular in Action" movies={actionMovies} />
      <Shows title="Hindi Movies" movies={hindiMovies} />
      <Shows title="Tamil Movies" movies={tamilMovies} />
      <Shows title="Malayalam Movies" movies={malayalamMovies} />
      <Shows title="Made in India" movies={indianMovies} />

      <Shows title="Top Rated Movies" movies={topMovies} />
    </>
  );
}

export default Home;
