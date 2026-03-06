"use client";

import { TrackType } from "@/components/Track";
import axios from "axios";
import constate from "constate";
import { useCallback, useState } from "react";

const useTracksHook = () => {
  const [tracks, setTracks] = useState<TrackType[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async (clearTracks?: boolean) => {
    const canUseLocalStorage = typeof window !== "undefined";
    const station = canUseLocalStorage
      ? localStorage.getItem("now-playing-station") || "bbc6music"
      : "bbc6music";
    const numberOfTracks = canUseLocalStorage
      ? localStorage.getItem("now-playing-tracks") || "20"
      : "20";

    setLoading(true);
    setError(null);
    if (clearTracks) setTracks([]);

    try {
      const response = await axios.get(
        `/api/tracks?station=${station}&tracks=${numberOfTracks}`
      );
      setTracks(response.data.tracks);
    } catch {
      setError("Unable to load tracks right now. Please try refreshing.");
    } finally {
      setLoading(false);
      setHasLoadedOnce(true);
    }
  }, []);

  const onRefreshClick = () => {
    fetchData();
  };

  return {
    tracks,
    setTracks,
    loading,
    setLoading,
    hasLoadedOnce,
    error,
    fetchData,
    onRefreshClick,
  };
};

const [TracksProvider, useTracks] = constate(useTracksHook);

export { TracksProvider, useTracks };
