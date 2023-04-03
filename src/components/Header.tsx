import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export interface HeaderProps {
  fetchData: (clearTracks: boolean) => void;
}

export const Header = ({ fetchData }: HeaderProps) => {
  const canUseLocalStorage = typeof window !== "undefined";

  const [settings, setSettings] = useState(false);
  const [station, setStation] = useState<string | null>(null);
  const [tracks, setTracks] = useState<number>(20);

  const saveSettings = () => {
    canUseLocalStorage &&
      localStorage.setItem("now-playing-station", station || "bbc6music");
    canUseLocalStorage &&
      localStorage.setItem("now-playing-tracks", tracks.toString());
    fetchData(true);
    setSettings(false);
  };

  const stations = [
    { name: "bbc6music", label: "6 Music" },
    { name: "bbcradio1", label: "Radio 1" },
    { name: "bbcradio2", label: "Radio 2" },
  ];

  const selectedStation = stations.filter(
    (singleStation) =>
      singleStation.name ===
      (canUseLocalStorage ? localStorage.getItem("now-playing-station") : "")
  );

  const title =
    selectedStation.length > 0 ? selectedStation[0].label : "6 Music";

  return (
    <nav className={`navbar navbar-dark bg-primary fixed-top`}>
      <div className="container-fluid">
        <span className="navbar-brand">Now playing on {title}</span>
        {/* <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setSettings(true)}
            >
              <i className={`bi bi-gear`}></i>
            </button>
          </li>
        </ul> */}
      </div>
      <Modal show={settings} onHide={() => setSettings(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="station">Station</Form.Label>
          <Form.Select
            aria-label="Station"
            id="station"
            onChange={(e) => setStation(e.target.value)}
            defaultValue={
              (canUseLocalStorage &&
                localStorage.getItem("now-playing-station")) ||
              undefined
            }
            className="mb-2"
          >
            <option value="bbc6music">6 Music</option>
            <option value="bbcradio1">Radio 1</option>
            <option value="bbcradio2">Radio 2</option>
          </Form.Select>
          <Form.Label htmlFor="numberOfTracks">Number of tracks</Form.Label>
          <Form.Control
            type="number"
            id="numberOfTracks"
            defaultValue={
              (canUseLocalStorage &&
                localStorage.getItem("now-playing-tracks")) ||
              tracks
            }
            onChange={(e) => setTracks(parseInt(e.target.value))}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setSettings(false)}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              saveSettings();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </nav>
  );
};
