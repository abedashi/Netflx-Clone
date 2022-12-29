import "./App.css";
import Header from "./components/Header";
import Original from "./components/Original";
import RandomMovie from "./components/RandomMovie";
import TopRated from "./components/TopRated";

const App = () => {
  return (
    <>
      <Header />
      <RandomMovie />
      <Original />
      <TopRated />
    </>
  );
};

export default App;
