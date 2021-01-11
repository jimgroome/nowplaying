const axios = require("axios");
const cheerio = require("cheerio");

exports.tracks = async (event, context) => {
  let responseItems;
  await axios
    .get("https://www.last.fm/user/bbc6music/library")
    .then((response) => {
      const $ = cheerio.load(response.data);
      let _tracks = [];
      const pageData = $(".tracklist-section .chartlist tbody .chartlist-row");
      if (pageData.length) {
        pageData.each((i, track) => {
          const artist = track.children[9].children[1].children[0].data;
          const title = track.children[7].children[1].children[0].data;
          const ago = track.children[15].children[1].children[0].data;
          const url = "https://music.youtube.com/search?q=" + encodeURIComponent(artist + " " + title);
          _tracks.push({
            artist: artist,
            title: title,
            ago: ago,
            url: url,
          });
        });
        responseItems = {
          statusCode: 200,
          body: JSON.stringify(_tracks),
          headers: { "Access-Control-Allow-Origin": "*" },
        };
      }
    })
    .catch((e) => console.log(e));
  return responseItems;
};
