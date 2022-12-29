import { useEffect, useState } from "react";

const TopRated = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
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
          poster_path: movie.backdrop_path,
        });
      }
      setMovies(topRatedMovies);
    };
    getTopRated();
  }, []);

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
