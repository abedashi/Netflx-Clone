import React, { useEffect, useState } from "react";
import useHttp from "../hooks/useHttp";

const route = "trending/all/week";

const Trending = () => {
  const [movies, setMovies] = useState([]);

  const getTrending = useHttp();

  useEffect(() => {
    const transformData = (trendingObj) => {
      let topRatedMovies = [];
      for (let movie of trendingObj.results) {
        topRatedMovies.push({
          id: movie.id,
          title: movie.title,
          poster_path: movie.backdrop_path,
        });
      }
      setMovies(topRatedMovies);
    };

    getTrending(route, transformData);
  }, [getTrending]);

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
