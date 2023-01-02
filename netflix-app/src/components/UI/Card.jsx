import { useNavigate } from "react-router-dom";

const Card = ({ movies, banner }) => {
  const navigate = useNavigate();

  return (
    <div className="text-white">
      <div className="ms-4">
        <h2 className="banner">{banner}</h2>
        <div className="posters_container">
          {movies.map((movie) => (
            <img
              onClick={() => navigate(`/Show/${movie.id}`)}
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

export default Card;
