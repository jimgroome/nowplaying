import { Button } from "react-bootstrap";
import { Header } from "./Header";
import { Track } from "./Track";
import { useTracks } from "@/context/useTracks";
import { useEffect } from "react";

const Tracks = () => {
  const { tracks, loading, fetchData, onRefreshClick } = useTracks();

  useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <Header fetchData={fetchData} />

      <div className="container-fluid">
        <div className="row">
          <div className="col">
            {tracks.map((track) => (
              <Track track={track} key={track.time} />
            ))}
            <Button className="refresh" onClick={() => onRefreshClick()}>
              <i
                className={`bi bi-arrow-clockwise ${loading && "refreshing"}`}
              ></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
