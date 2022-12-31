import React, { useState, useEffect } from "react";

const appContext = React.createContext({
  shows: [],
  search: "",
  clicked: false,
  searchHandler: () => {},
  onToggle: () => {},
});
export const API_KEY = "9042622973be3bf9c566b65a236a89bc";

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

  useEffect(() => {
    if (search === "") {
      return;
    }
    const fetchSearch = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=9042622973be3bf9c566b65a236a89bc&query=${search}`
      );

      if (!response.ok) {
        throw new Error("Request Failed!");
      }

      const data = await response.json();
      let loadedShows = [];
      for (let show of data.results) {
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
    fetchSearch();
  }, [search]);

  return (
    <appContext.Provider value={{ shows, searchHandler, onToggle, clicked }}>
      {children}
    </appContext.Provider>
  );
};

export default appContext;
