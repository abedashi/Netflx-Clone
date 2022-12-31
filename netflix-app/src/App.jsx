import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import View from "./pages/View";
import MoviesList from "./pages/MoviesList";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/Original/:id" element={<View />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
