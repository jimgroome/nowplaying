import React, { useState, useEffect } from "react";

function App() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setLoading(true);
    await fetch("https://g0jq3ac5fl.execute-api.eu-west-2.amazonaws.com/Prod/tracks")
      .then((response) => response.json())
      .then((data) => {
        setTracks(data);
        setLoading(false);
      });
    // await axios
    //   .get("https://morning-beach-46090.herokuapp.com/https://www.last.fm/user/bbc6music")
    //   .then((response) => {
    //     const $ = cheerio.load(response.data);
    //     let _tracks = [];
    //     const pageData = $("#recent-tracks-section .chartlist tbody .chartlist-row");
    //     if (pageData.length) {
    //       setLoading(false);
    //       let count = 0;
    //       pageData.each((i, track) => {
    //         const artist = track.children[9].children[1].children[0].data;
    //         const title = track.children[7].children[1].children[0].data;
    //         const ago = track.children[15].children[1].children[0].data;
    //         const url = "https://music.youtube.com/search?q=" + encodeURIComponent(artist + " " + title);
    //         if (ago.includes("ago")) {
    //           _tracks.push(
    //             <div className="card mb-4" key={count}>
    //               <div className="card-body">
    //                 <p className="card-text">
    //                   <a href={url} target="_blank" rel="noopener noreferrer" className="track">
    //                     {artist} - {title}
    //                   </a>
    //                 </p>
    //                 <p className="card-text">
    //                   <small className="ago">{ago}</small>
    //                 </p>
    //               </div>
    //             </div>
    //           );

    //           count++;
    //         }
    //       });
    //       setTracks(_tracks);
    //     }
    //   })
    //   .catch((e) => console.log(e));
  };

  const onRefreshClick = (e) => {
    e.preventDefault();
    fetchData();
  };

  let loadingContent = null;
  if (loading)
    loadingContent = (
      <div className="loading-overlay">
        <em className="loading-icon" />
      </div>
    );

  return (
    <div className="App">
      {loadingContent}
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1 className="h3 mb-4">Now playing on 6 Music</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="button" className="btn btn-primary mb-4" onClick={(e) => onRefreshClick(e)}>
              Refresh
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {tracks.length &&
              tracks.map((track) => {
                return (
                  <div className="card mb-4" key={track.title}>
                    <div className="card-body">
                      <p className="card-text">
                        <a href={track.url} target="_blank" rel="noopener noreferrer" className="track">
                          {track.artist} - {track.title}
                        </a>
                      </p>
                      <p className="card-text">
                        <small className="ago">{track.ago}</small>
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
