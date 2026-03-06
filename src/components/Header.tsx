"use client";

const stations = [
  { name: "bbc6music", label: "6 Music" },
  { name: "bbcradio1", label: "Radio 1" },
  { name: "bbcradio2", label: "Radio 2" },
];

export const Header = () => {
  const canUseLocalStorage = typeof window !== "undefined";
  const savedStation = canUseLocalStorage
    ? localStorage.getItem("now-playing-station")
    : "bbc6music";
  const selectedStation = stations.find((station) => station.name === savedStation);
  const title = selectedStation ? selectedStation.label : "6 Music";

  return (
    <nav className="fixed inset-x-0 top-0 z-30 bg-[rgb(44,62,80)] text-white shadow-md">
      <div className="mx-auto w-full max-w-5xl px-4 py-4 sm:px-6">
        <span className="text-lg font-semibold tracking-tight">
          Now playing on {title}
        </span>
      </div>
    </nav>
  );
};
