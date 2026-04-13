"use client";

import { FaSpotify, FaYoutube } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";

export interface TrackType {
  artist: string;
  title: string;
  time: string;
  image: string | null;
  spotify: string;
  artistGoogle: string;
  titleGoogle: string;
  google: string;
  youtube: string;
  youtubeMusic: string;
}

export const Track = ({
  track,
  featured = false,
  menuOpen,
  onToggleMenu,
  onCloseMenu,
}: {
  track: TrackType;
  featured?: boolean;
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
}) => {
  return (
    <article
      className={`relative mb-4 rounded-lg border border-slate-200 bg-white shadow-sm ${
        menuOpen ? "z-20" : "z-0"
      }`}
    >
      <div
        className={`flex gap-3 p-4 ${featured ? "flex-col sm:flex-row" : ""}`}
      >
        {featured && track.image ? (
          <div className="overflow-hidden rounded-lg bg-slate-200 sm:w-44 sm:shrink-0">
            {/* Using the remote Last.fm artwork URL directly keeps this card simple. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={track.image}
              alt={`${track.artist} artwork`}
              className="h-44 w-full object-cover sm:h-full"
            />
          </div>
        ) : null}

        <div className="min-w-0 flex-1">
          <div className="min-w-0 rounded-sm outline-none">
            {featured ? (
              <div className="space-y-1">
                <a
                  href={track.artistGoogle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xl font-bold text-slate-900 transition hover:text-sky-700 focus-visible:text-sky-700"
                >
                  {track.artist}
                </a>
                <a
                  href={track.titleGoogle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg font-medium text-slate-700 transition hover:text-sky-700 focus-visible:text-sky-700"
                >
                  {track.title}
                </a>
              </div>
            ) : (
              <a
                href={track.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-sky-700 focus-visible:ring-2 focus-visible:ring-sky-600"
              >
                <p className="text-base font-medium text-slate-900 break-words">
                  {track.artist} - {track.title}
                </p>
              </a>
            )}
            <p className="mt-2 text-sm text-slate-600">
              {new Date(track.time).toLocaleTimeString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </div>

        {featured ? (
          <div className="flex shrink-0 items-start gap-2">
            <a
              href={track.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-5 items-center justify-center text-slate-600 transition hover:bg-slate-100 hover:text-[#1db954] focus-visible:outline-none"
            >
              <FaSpotify className="h-5 w-5" />
              <span className="sr-only">Open on Spotify</span>
            </a>
            <a
              href={track.youtubeMusic}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-5 items-center justify-center text-slate-600 transition hover:bg-slate-100 hover:text-[#ff0033] focus-visible:outline-none"
            >
              <SiYoutubemusic className="h-5 w-5" />
              <span className="sr-only">Open on YouTube Music</span>
            </a>
            <a
              href={track.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-5 items-center justify-center text-slate-600 transition hover:bg-slate-100 hover:text-[#ff0000] focus-visible:outline-none"
            >
              <FaYoutube className="h-5 w-5" />
              <span className="sr-only">Open on YouTube</span>
            </a>
          </div>
        ) : (
          <div className="relative shrink-0">
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={menuOpen}
              onClick={onToggleMenu}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path d="M10 4.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm0 7a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm0 7a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
              </svg>
              <span className="sr-only">Open links menu</span>
            </button>

            {menuOpen ? (
              <div
                role="menu"
                className="absolute right-0 top-11 z-30 w-40 overflow-hidden rounded-md border border-slate-200 bg-white py-1 shadow-lg"
              >
                <a
                  role="menuitem"
                  href={track.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onCloseMenu}
                  className="block px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
                >
                  Google
                </a>
                <a
                  role="menuitem"
                  href={track.youtubeMusic}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onCloseMenu}
                  className="block px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
                >
                  YouTube Music
                </a>
                <a
                  role="menuitem"
                  href={track.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onCloseMenu}
                  className="block px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
                >
                  Youtube
                </a>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </article>
  );
};
