import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Original = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTopRated = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/trending/tv/week?api_key=9042622973be3bf9c566b65a236a89bc"
      );
      if (!response.ok) {
        throw new Error("Request Failed!");
      }
      const data = await response.json();
      let topRatedMovies = [];
      for (let movie of data.results) {
        topRatedMovies.push({
          id: movie.id,
          title: movie.name,
          poster_path: movie.poster_path,
        });
      }
      setMovies(topRatedMovies);
    };
    getTopRated();
  }, []);

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
