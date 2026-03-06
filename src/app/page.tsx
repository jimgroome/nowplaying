"use client";

import Tracks from "@/components/Tracks";
import { TracksProvider } from "@/context/useTracks";

export default function HomePage() {
  return (
    <TracksProvider>
      <Tracks />
    </TracksProvider>
  );
}
