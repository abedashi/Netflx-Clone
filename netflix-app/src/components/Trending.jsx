import { useState } from "react";

const Trending = () => {
  const [movies, setMovies] = useState([]);

  const getTopRated = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=9042622973be3bf9c566b65a236a89bc"
    );
    if (!response.ok) {
      throw new Error("Request Failed!");
    }
    const data = await response.json();
    let topRatedMovies = [];
    for (let movie of data.results) {
      topRatedMovies.push({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        poster_path: movie.backdrop_path,
        release_date: movie.release_date,
        vote_average: movie.vore_average,
      });
    }
    setMovies(topRatedMovies);
  };
  getTopRated();
  return;
};

export default Trending;
