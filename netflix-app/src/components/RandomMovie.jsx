const RandomMovie = () => {
  return (
    <div className="random-image" style={{ height: "60vh" }}>
      <div style={{ height: "20vh" }}></div>
      <div className="text-white ms-4" style={{ height: "30vh" }}>
        <h1
          style={{
            fontWeight: "800",
            fontSize: "3rem",
            paddingBottom: "0.3rem",
          }}
        >
          Emily in Paris
        </h1>
        <div className="d-flex align-items-center gap-4">
          <div>
            <button className="button">Play</button>
          </div>
          <div>
            <button className="button">My List</button>
          </div>
        </div>
        <h1
          style={{
            width: "45rem",
            lineHeight: "1.3",
            paddingTop: "1rem",
            fontSize: ".8rem",
            maxWidth: "360px",
            height: "80px",
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus,
          maiores laudantium assumenda fugit illo, magnam, beatae est sequi
          distinctio iusto eos aut esse autem officiis? Exercitationem
          laboriosam harum tenetur obcaecati.
        </h1>
      </div>
      <div className="graddiendd"></div>
    </div>
  );
};

export default RandomMovie;
