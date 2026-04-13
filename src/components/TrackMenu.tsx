import { TrackType } from "./Track";

export const TrackMenu = ({
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
  if (featured) return null;

  return (
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
  );
};
