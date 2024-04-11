import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const getTracks = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const apiResponse = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${
        req.query && req.query.station ? req.query.station : "bbc6music"
      }&limit=${req.query.tracks}&api_key=${
        process.env.LAST_FM_API_KEY
      }&format=json`
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
        const time = track.date["#text"];
        const uts = new Date(
          parseInt(track.date.uts) * 1000
        ).toLocaleTimeString();

        console.log(uts);

        const spotify = `https://open.spotify.com/search/${encodeURIComponent(
          artist + " " + title
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

    res.status(200).json({ tracks });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export default getTracks;
