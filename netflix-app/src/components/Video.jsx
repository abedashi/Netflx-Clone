import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const Video = ({ id }) => {
  const [key, setKey] = useState([]);

  useEffect(() => {
    const fetchVideoById = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/videos?api_key=9042622973be3bf9c566b65a236a89bc`
      );
      if (!response.ok) {
        throw new Error("Request Failed");
      }
      const data = await response.json();

      let loadedVideo = [];
      for (const video of data.results) {
        if (video.name === "Official Trailer") {
          loadedVideo.push(video.key);
        }
      }
      setKey(loadedVideo);
    };
    fetchVideoById();
  }, [id]);

  return (
    <>
      <div className="p-2 d-flex align-items-center justify-content-end">
        {key.length > 0 && (
          <div className="cont">
            <ReactPlayer
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                minWidth: "100%",
              }}
              url={`https://www.youtube.com/watch?v=${key}`}
              controls
            />
          </div>
        )}
      </div>
      {key.length === 0 && (
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "318px", color: "rgb(97, 97, 97)" }}
        >
          <h1>No Offical Trialer</h1>
        </div>
      )}
    </>
  );
};

export default Video;
