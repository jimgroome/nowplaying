"use client";

export interface TrackType {
  artist: string;
  title: string;
  time: string;
  spotify: string;
  google: string;
  youtube: string;
}

export const Track = ({
  track,
  menuOpen,
  onToggleMenu,
  onCloseMenu,
}: {
  track: TrackType;
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
      <div className="flex gap-3 p-4">
        <a
          href={track.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="block min-w-0 flex-1 rounded-sm outline-none transition hover:text-sky-700 focus-visible:ring-2 focus-visible:ring-sky-600"
        >
          <p className="text-base font-medium text-slate-900 break-words">
            {track.artist} - {track.title}
          </p>
          <p className="text-sm text-slate-600">
            {new Date(track.time).toLocaleDateString()} {" "}
            {new Date(track.time).toLocaleTimeString()}
          </p>
        </a>

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
      </div>
    </article>
  );
};
