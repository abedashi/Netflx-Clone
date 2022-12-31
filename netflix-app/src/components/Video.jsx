import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import useHttp from "../hooks/useHttp";

const Video = ({ id }) => {
  const [key, setKey] = useState([]);

  const getVideo = useHttp();

  useEffect(() => {
    const route = `tv/${id}/videos`;

    const transformData = (videoObj) => {
      let loadedVideo = [];
      for (const video of videoObj.results) {
        if (video.name === "Official Trailer") {
          loadedVideo.push(video.key);
        }
      }
      setKey(loadedVideo);
    };

    getVideo(route, transformData);
  }, [id, getVideo]);

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
          style={{ color: "rgb(97, 97, 97)" }}
        >
          <h1>No Offical Trialer</h1>
        </div>
      )}
    </>
  );
};

export default Video;
