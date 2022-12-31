import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useHttp from "../hooks/useHttp";

const route = "trending/tv/week";

const RandomMovie = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState({});

  const getRandomShow = useHttp();

  useEffect(() => {
    const transformData = (randomObj) => {
      const random = Math.floor(Math.random() * 20);
      let loadedShow = {
        ...randomObj.results[random],
      };

      setMovies(loadedShow);
    };

    getRandomShow(route, transformData);
  }, [getRandomShow]);

  return (
    <div
      className="random-image"
      style={{
        height: "60vh",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies.poster_path}`,
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
          {movies.name}
        </h1>
        <div className="d-flex align-items-center gap-4">
          <div>
            <button
              className="button"
              onClick={() => {
                navigate(`/Original/${movies.id}`);
              }}
            >
              Play
            </button>
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
          {movies.overview}
        </h1>
      </div>
      <div className="linear-gradient"></div>
    </div>
  );
};

export default React.memo(RandomMovie);
