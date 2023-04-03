import React from "react";
import { Dropdown } from "react-bootstrap";

export interface TrackType {
  artist: string;
  title: string;
  time: string;
  spotify: string;
  google: string;
  youtube: string;
}

export const Track = ({ track }: { track: TrackType }) => (
  <div className="card mb-4">
    <div className="card-body">
      <div className="row">
        <div className="col-10">
          <a
            href={track.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="track"
          >
            <p className="card-text">
              {track.artist} - {track.title}
            </p>
            <p className="card-text">
              <small className="ago">{track.time}</small>
            </p>
          </a>
        </div>
        <div className="col-2">
          <Dropdown align="end">
            <Dropdown.Toggle variant="link" className="float-end" />
            <Dropdown.Menu>
              <Dropdown.Item
                href={track.google}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google
              </Dropdown.Item>
              <Dropdown.Item
                href={track.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  </div>
);
