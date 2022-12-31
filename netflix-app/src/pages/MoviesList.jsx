import { useContext, useEffect, useState } from "react";

import Original from "../components/Original";
import RandomMovie from "../components/RandomMovie";
import TopRated from "../components/TopRated";
import Trending from "../components/Trending";
import SearchedShow from "../components/SearchedShow";
import appContext from "../store/Context";

const MoviesList = () => {
  const { shows, clicked } = useContext(appContext);
  const [result, setResult] = useState(false);

  useEffect(() => {
    if (shows.length > 0 && clicked) {
      setResult(true);
    }
  }, [shows, clicked]);

  return (
    <>
      <RandomMovie />
      {result && clicked && <SearchedShow shows={shows} />}
      <Original />
      <TopRated />
      <Trending />
    </>
  );
};
export default MoviesList;
