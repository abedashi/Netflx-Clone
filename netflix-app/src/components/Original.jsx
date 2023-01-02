import React, { useEffect, useState } from "react";
import useHttp from "../hooks/useHttp";
import Card from "./UI/Card";

const route = "trending/tv/week";

const Original = () => {
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

  return <Card movies={movies} banner="Ashie Originals" />;
};

export default React.memo(Original);
