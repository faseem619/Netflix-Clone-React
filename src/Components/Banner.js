import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import "./banner.css";

export default function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const index = Math.floor(Math.random() * request.data.results.length);
      setMovie(request.data.results[index]);
    };
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backdropPosition: "center ",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="fadebottom">
        <div className="banner_contents">
          {/* optonal chaining */}
          <h1 className="banner_title">
            {movie?.name || movie?.title || movie?.origina_name}
          </h1>
          <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
          </div>

          <h1 className="banner_des">{movie?.overview}</h1>
        </div>
      </div>
    </header>
  );
}
