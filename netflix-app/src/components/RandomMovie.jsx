import React, { useEffect, useState } from "react";

const RandomMovie = () => {
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
          overview: movie.overview,
          poster_path: movie.poster_path,
          release_date: movie.first_air_date,
          vote_average: movie.vote_average,
        });
      }
      setMovies(topRatedMovies);
    };
    getTopRated();
  }, []);
  // tiLJNqQuCwIIgK30iavU6x0SFQj
  return (
    <div
      className="random-image"
      style={{
        height: "60vh",
        backgroundImage: `url(https://image.tmdb.org/t/p/original//tiLJNqQuCwIIgK30iavU6x0SFQj.jpg`,
      }}
    >
      <div style={{ height: "20vh" }}></div>
      <div className="text-white ms-4" style={{ height: "30vh" }}>
        <h1
          style={{
            fontWeight: "800",
            fontSize: "3rem",
            paddingBottom: "0.3rem",
          }}
        >
          Emily in Paris
        </h1>
        <div className="d-flex align-items-center gap-4">
          <div>
            <button className="button">Play</button>
          </div>
          <div>
            <button className="button">My List</button>
          </div>
        </div>
        <h1
          style={{
            width: "45rem",
            lineHeight: "1.3",
            paddingTop: "1rem",
            fontSize: ".8rem",
            maxWidth: "360px",
            height: "80px",
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus,
          maiores laudantium assumenda fugit illo, magnam, beatae est sequi
          distinctio iusto eos aut esse autem officiis? Exercitationem
          laboriosam harum tenetur obcaecati.
        </h1>
      </div>
      <div className="linear-gradient"></div>
    </div>
  );
};

export default React.memo(RandomMovie);
