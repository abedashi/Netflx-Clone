import Original from "./Original";
import RandomMovie from "./RandomMovie";
import TopRated from "./TopRated";
import Trending from "./Trending";

const MoviesList = () => {
  return (
    <>
      <RandomMovie />
      <Original />
      <TopRated />
      <Trending />
    </>
  );
};
export default MoviesList;
