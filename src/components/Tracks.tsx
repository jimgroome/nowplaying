"use client";

import { Header } from "./Header";
import { Track } from "./Track";
import { useTracks } from "@/context/useTracks";
import { useEffect, useState } from "react";
import { IoIosRefresh } from "react-icons/io";

const Tracks = () => {
  const {
    tracks,
    loading,
    hasLoadedOnce,
    station,
    setStation,
    error,
    fetchData,
    onRefreshClick,
  } = useTracks();
  const [openMenuTrackId, setOpenMenuTrackId] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onStationChange = (newStation: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("now-playing-station", newStation);
    }
    setStation(newStation);
    fetchData(true, newStation);
  };

  return (
    <div className="relative min-h-screen pt-24">
      <Header station={station} onStationChange={onStationChange} />

      <main className="mx-auto w-full max-w-5xl px-4 pb-28 sm:px-6">
        {!hasLoadedOnce ? (
          <div className="mb-4 flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-5 text-sm text-slate-600 shadow-sm">
            <IoIosRefresh className="h-5 w-5 animate-spin text-[rgb(44,62,80)]" />
            Loading tracks...
          </div>
        ) : null}
        {error ? (
          <div className="mb-4 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
            {error}
          </div>
        ) : null}
        {hasLoadedOnce && !error && !loading && tracks.length === 0 ? (
          <div className="rounded-lg border border-slate-200 bg-white px-4 py-6 text-sm text-slate-600 shadow-sm">
            No tracks found.
          </div>
        ) : null}
        {tracks.map((track) => {
          const trackId = `${track.time}-${track.artist}-${track.title}`;
          return (
            <Track
              track={track}
              key={track.time}
              menuOpen={openMenuTrackId === trackId}
              onToggleMenu={() =>
                setOpenMenuTrackId((current) =>
                  current === trackId ? null : trackId
                )
              }
              onCloseMenu={() => setOpenMenuTrackId(null)}
            />
          );
        })}
      </main>

      <button
        type="button"
        onClick={onRefreshClick}
        className="fixed bottom-6 left-3 inline-flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[rgb(44,62,80)] text-white shadow-lg transition hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(44,62,80)]"
      >
        <IoIosRefresh className={`h-8 w-8 ${loading ? "animate-spin" : ""}`} />
        <span className="sr-only">Refresh tracks</span>
      </button>
    </div>
  );
};

export default Tracks;
