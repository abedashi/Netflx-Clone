import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useHttp from "../hooks/useHttp";

const route = "trending/tv/week";

const Original = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  const getOriginals = useHttp();

  useEffect(() => {
    const transfomData = (originalsObj) => {
      let topRatedMovies = [];
      for (let movie of originalsObj.results) {
        topRatedMovies.push({
          id: movie.id,
          title: movie.name,
          poster_path: movie.poster_path,
        });
      }
      setMovies(topRatedMovies);
    };

    getOriginals(route, transfomData);
  }, [getOriginals]);

  return (
    <div className="text-white">
      <div className="ms-4">
        <h2 className="banner">Ashie Originals</h2>
        <div className="posters_container">
          {movies.map((movie) => (
            <img
              onClick={() => navigate(`/Original/${movie.id}`)}
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              className="poster poster_large"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Original);
