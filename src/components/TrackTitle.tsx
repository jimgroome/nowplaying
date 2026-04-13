import { TrackType } from "./Track";

export const TrackTitle = ({
  track,
  featured = false,
}: {
  track: TrackType;
  featured?: boolean;
}) => {
  return featured ? (
    <div className="space-y-1">
      <a
        href={track.spotify}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-xl font-bold text-slate-900 transition hover:text-sky-700 focus-visible:text-sky-700"
      >
        {track.artist}
      </a>
      <a
        href={track.spotify}
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
      className="block transition hover:text-sky-700 focus-visible:ring-2 focus-visible:ring-sky-600 text-base font-medium text-slate-900 break-words"
    >
      {track.artist} - {track.title}
    </a>
  );
};
