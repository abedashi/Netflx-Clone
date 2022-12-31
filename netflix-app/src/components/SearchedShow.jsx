import { useNavigate } from "react-router-dom";

const SearchedShow = ({ shows }) => {
  const navigate = useNavigate();

  if (shows.length === 0) {
    return <span>Empty</span>;
  }

  return (
    <div className="text-white">
      <div className="ms-4">
        <h2 className="banner">Recent TV Shows Search</h2>
        <div className="posters_container">
          {shows.map((show) => (
            <img
              onClick={() => navigate(`/Original/${show.id}`)}
              key={show.id}
              src={`https://image.tmdb.org/t/p/original/${show.poster_path}`}
              alt={show.title}
              className="poster poster_large"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchedShow;
