import React, { useState, useEffect } from "react";
import useHttp from "../hooks/useHttp";

const appContext = React.createContext({
  shows: [],
  search: "",
  clicked: false,
  onToggle: () => {},
  searchHandler: () => {},
});

const route = "search/tv";

export const ContextProvider = ({ children }) => {
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState("");
  const [clicked, setClicked] = useState(false);

  const searchHandler = (searchInput) => {
    setSearch(searchInput);
  };

  const onToggle = () => {
    setClicked((clicked) => !clicked);
  };

  const fetchSearch = useHttp();

  useEffect(() => {
    if (search === "") {
      return;
    }

    const transformData = (searchObj) => {
      let loadedShows = [];
      for (let show of searchObj.results) {
        if (show.poster_path !== null) {
          loadedShows.push({
            id: show.id,
            title: show.name,
            poster_path: show.poster_path,
          });
        }
      }
      setShows(loadedShows);
    };

    fetchSearch(route, transformData, `&query=${search}`);
  }, [search, fetchSearch]);

  return (
    <appContext.Provider value={{ shows, clicked, searchHandler, onToggle }}>
      {children}
    </appContext.Provider>
  );
};

export default appContext;
