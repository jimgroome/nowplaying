"use client";

import { useEffect, useRef, useState } from "react";

const stations = [
  { name: "bbc6music", label: "BBC Radio 6 Music" },
  { name: "bbcradio1", label: "Radio 1" },
  { name: "bbcradio2", label: "Radio 2" },
];

interface HeaderProps {
  station: string;
  onStationChange: (station: string) => void;
}

export const Header = ({ station, onStationChange }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const selectedStation = stations.find(
    (singleStation) => singleStation.name === station
  );
  const selectedLabel = selectedStation
    ? selectedStation.label
    : "BBC Radio 6 Music";

  useEffect(() => {
    const onClickAway = (event: MouseEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("mousedown", onClickAway);
    return () => {
      window.removeEventListener("mousedown", onClickAway);
    };
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-30 bg-[rgb(44,62,80)] text-white shadow-md">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <span className="text-lg font-semibold tracking-tight">
          Now playing
        </span>
        <div ref={menuRef} className="relative">
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className="flex w-44 items-center justify-between rounded-md border border-slate-500 bg-white px-3 py-2 text-sm font-medium text-slate-900 outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-52"
          >
            <span>{selectedLabel}</span>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`h-4 w-4 transition ${menuOpen ? "rotate-180" : ""}`}
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {menuOpen ? (
            <ul
              role="listbox"
              className="absolute right-0 top-full z-40 mt-2 w-52 overflow-hidden rounded-md border border-slate-300 bg-white py-1 text-sm text-slate-900 shadow-lg"
            >
              {stations.map((singleStation) => (
                <li key={singleStation.name}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={station === singleStation.name}
                    onClick={() => {
                      onStationChange(singleStation.name);
                      setMenuOpen(false);
                    }}
                    className={`w-full px-3 py-2 text-left transition hover:bg-slate-100 ${
                      station === singleStation.name ? "bg-slate-100 font-semibold" : ""
                    }`}
                  >
                    {singleStation.label}
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </nav>
  );
};
