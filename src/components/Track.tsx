"use client";

import { TimeStamp } from "./TimeStamp";
import { FeaturedTrackLinks } from "./FeaturedTrackLinks";
import { TrackTitle } from "./TrackTitle";
import { TrackMenu } from "./TrackMenu";

export interface TrackType {
  artist: string;
  title: string;
  time: string;
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
      <div className={`flex gap-3 p-4 ${featured ? "flex-col" : ""}`}>
        <div className="min-w-0 flex-1">
          <div className="min-w-0 rounded-sm outline-none flex flex-col space-y-1">
            <TrackTitle track={track} featured={featured} />

            <div className="flex flex-row">
              <TimeStamp time={track.time} />

              <FeaturedTrackLinks track={track} featured={featured} />
            </div>
          </div>
        </div>

        <TrackMenu
          track={track}
          featured={featured}
          menuOpen={menuOpen}
          onToggleMenu={onToggleMenu}
          onCloseMenu={onCloseMenu}
        />
      </div>
    </article>
  );
};
