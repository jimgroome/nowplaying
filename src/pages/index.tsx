import KeyboardEventHandler from "react-keyboard-event-handler";
import { Header } from "@/components/Header";
import { Track, TrackType } from "@/components/Track";
import { TracksProvider } from "@/context/useTracks";
import Tracks from "@/components/Tracks";

const Home = () => {
  return (
    <TracksProvider>
      <Tracks />
    </TracksProvider>
  );
};

export default Home;
