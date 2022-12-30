import React, { useEffect, useState } from "react";

const Trending = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrending = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/trending/all/week?api_key=9042622973be3bf9c566b65a236a89bc"
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
          poster_path: movie.backdrop_path,
        });
      }
      setMovies(topRatedMovies);
    };
    getTrending();
  }, []);

  return (
    <div className="text-white">
      <div className="ms-4">
        <h2 className="banner">Trending Now</h2>
        <div className="posters_container">
          {movies.map((movie) => (
            <img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.poster_path}
              className="poster"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Trending);
