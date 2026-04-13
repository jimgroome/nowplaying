import { FaGoogle, FaYoutube } from "react-icons/fa";
import { TrackType } from "./Track";
import { SiYoutubemusic } from "react-icons/si";

export const FeaturedTrackLinks = ({
  track,
  featured = false,
}: {
  track: TrackType;
  featured?: boolean;
}) => {
  if (!featured) return null;

  return (
    <div className="flex shrink-0 items-start gap-2 ml-auto">
      <a
        href={track.google}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-5 items-center justify-center text-slate-600 transition hover:bg-slate-100 hover:text-[#4285f4] focus-visible:outline-none"
      >
        <FaGoogle className="h-5 w-5" />
        <span className="sr-only">Open Google search</span>
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
  );
};
