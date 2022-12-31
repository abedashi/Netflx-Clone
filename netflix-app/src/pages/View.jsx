import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Video from "../components/Video";

const View = () => {
  const params = useParams();
  const [movies, setMovies] = useState({});

  useEffect(() => {
    const getOriginals = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${params.id}?api_key=9042622973be3bf9c566b65a236a89bc`
      );
      if (!response.ok) {
        throw new Error("Request Failed!");
      }
      const data = await response.json();

      const genres = [];
      for (const name of data.genres) {
        genres.push(name.name, ", ");
      }

      let topRatedMovies = {
        id: data.id,
        adult: data.adult,
        title: data.name,
        overview: data.overview,
        poster_path: data.poster_path,
        release_date: data.first_air_date.slice(0, 4),
        vote_average: data.vote_average.toFixed(1),
        season_number: data.number_of_seasons,
        genres: [...genres],
      };
      setMovies(topRatedMovies);
    };
    getOriginals();
  }, [params.id]);

  return (
    <>
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
            {movies.title}
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
            {movies.overview}
          </h1>
        </div>
        <div className="linear-gradient"></div>
      </div>
      <div className="text-white ms-4">
        <div className="shi d-flex align-items-center gap-3">
          <span>{movies.release_date}</span>
          <span
            className="px-2 rounded"
            style={{ border: "1px solid rgb(97, 97, 97)" }}
          >
            18+
          </span>
          {movies.season_number === 1 && (
            <span>{movies.season_number} Season</span>
          )}
          {movies.season_number > 1 && (
            <span>{movies.season_number} Seasons</span>
          )}
          <div>
            <i className="bi bi-star-fill"> </i>
            {movies.vote_average}
          </div>
          <div>|</div>
          <div className="me-4">
            <span style={{ color: "rgb(97, 97, 97)" }}>Genres: </span>
            {movies.genres}
          </div>
        </div>
      </div>
      <Video id={params.id} />
    </>
  );
};

export default View;
