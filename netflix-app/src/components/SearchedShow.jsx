import Card from "./UI/Card";

const SearchedShow = ({ shows }) => {
  if (shows.length === 0) {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <span className="text-white banner ms-4">Search Not Found</span>
      </div>
    );
  }

  return <Card movies={shows} banner="Recent TV Shows Search" />;
};

export default SearchedShow;
