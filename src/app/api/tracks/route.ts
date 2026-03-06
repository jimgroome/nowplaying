import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const station = searchParams.get("station") ?? "bbc6music";
  const tracksLimit = searchParams.get("tracks") ?? "20";

  try {
    const apiResponse = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${station}&limit=${tracksLimit}&api_key=${process.env.LAST_FM_API_KEY}&format=json`
    );

    const tracksFromApi = apiResponse.data.recenttracks.track.slice(1);

    const tracks = tracksFromApi.map(
      (track: {
        artist: { "#text": string };
        name: string;
        date: { "#text": string; uts: string };
      }) => {
        const artist = track.artist["#text"];
        const title = track.name;
        const uts = new Date(parseInt(track.date.uts, 10) * 1000);

        const spotify = `https://open.spotify.com/search/${encodeURIComponent(
          `${artist} ${title}`
        )}`;
        const google = `https://www.google.com/search?q=${artist
          .split(" ")
          .join("+")}+${title.split(" ").join("+")}`;
        const youtube = `https://www.youtube.com/results?search_query=${artist
          .split(" ")
          .join("+")}+${title.split(" ").join("+")}`;

        return {
          artist,
          title,
          time: uts,
          spotify,
          google,
          youtube,
        };
      }
    );

    return NextResponse.json({ tracks }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch tracks" }, { status: 400 });
  }
}
