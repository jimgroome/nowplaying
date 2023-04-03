import { TrackType } from "@/components/Track";
import axios from "axios";
import constate from "constate";
import { useState } from "react";

const useTracksHook = () => {
  const [tracks, setTracks] = useState<TrackType[]>([]);
  const [loading, setLoading] = useState(false);
  const [station, setStation] = useState("bbc6music");
  const [numberOfTracks, setNumberOfTracks] = useState("20");

  const fetchData = async (clearTracks?: boolean) => {
    setLoading(true);
    if (clearTracks) setTracks([]);
    const tracks = await axios.get(
      `/api/tracks?station=${station}&tracks=${numberOfTracks}`
    );
    setTracks(tracks.data.tracks);
    setLoading(false);
  };

  const onRefreshClick = () => {
    setLoading(true);
    fetchData();
  };

  return {
    tracks,
    setTracks,
    loading,
    setLoading,
    station,
    setStation,
    numberOfTracks,
    setNumberOfTracks,
    fetchData,
    onRefreshClick,
  };
};

const [TracksProvider, useTracks] = constate(useTracksHook);

export { TracksProvider, useTracks };
