import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import View from "./components/View";
import MoviesList from "./components/MoviesList";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/Original/:id" element={<View />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/Top-Rated/:id" element={<View />} />
        <Route path="/Trending/:id" /> */}
      </Routes>
    </>
  );
};

export default App;
