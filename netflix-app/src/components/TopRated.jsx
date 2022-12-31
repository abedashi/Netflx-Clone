import { useEffect, useState } from "react";
import useHttp from "../hooks/useHttp";

const route = "movie/top_rated";

const TopRated = () => {
  const [movies, setMovies] = useState([]);

  const getTopRated = useHttp();

  useEffect(() => {
    const transformData = (topRatedObj) => {
      let topRatedMovies = [];
      for (let movie of topRatedObj.results) {
        topRatedMovies.push({
          id: movie.id,
          title: movie.title,
          poster_path: movie.backdrop_path,
        });
      }
      setMovies(topRatedMovies);
    };

    getTopRated(route, transformData);
  }, [getTopRated]);

  return (
    <div className="text-white">
      <div className="ms-4">
        <h2 className="banner">Top Rated</h2>
        <div className="posters_container">
          {movies.map((movie) => (
            <img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original//${movie.poster_path}`}
              alt={movie.poster_path}
              className="poster"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRated;
