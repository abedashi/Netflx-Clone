import { useState } from "react";

const Original = () => {
  const [movies, setMovies] = useState([]);

  const getTopRated = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=9042622973be3bf9c566b65a236a89bc"
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
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        vote_average: movie.vore_average,
      });
    }
    setMovies(topRatedMovies);
  };
  getTopRated();

  return (
    <div className="text-white">
      <div className="ms-4">
        <h2 className="banner">Ashie Originals</h2>
        <div className="posters_container">
          {movies.map((movie) => (
            <img
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

export default Original;
