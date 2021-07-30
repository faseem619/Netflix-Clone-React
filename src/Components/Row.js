import React, { useState } from "react";
import axios from "../axios";
import "./row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { IconContext } from "react-icons";

const url = "https://image.tmdb.org/t/p/original";

export default function Row({ title, fetchUrl, isLargeRow }) {
  const [translate, setTranslate] = useState(0);
  const [movies, setMovies] = useState([]);
  const [prevbtndisplay, toggleprev] = useState(false);
  const [nextbtndisplay, togglenext] = useState(true);
  const [trailerUrl, setTrailerUrl] = useState("");
  const rowReference = React.useRef([]);
  const bigRowReference = React.useRef([]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = async (movie) => {
    movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        if (urlParams.get("v") === trailerUrl) setTrailerUrl("");
        else setTrailerUrl(urlParams.get("v"));
      })
      .catch((error) => console.error());
  };

  React.useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    };
    fetchData();
  }, [fetchUrl]);

  React.useEffect(() => {
    rowReference.current = rowReference.current.slice(0, movies.length);
  }, [movies]);

  const togglescroll = (type) => {
    let maxScroll =
      bigRowReference.current.scrollWidth -
      bigRowReference.current.getBoundingClientRect().width -
      40;
    if (type === "left") {
      if (translate > -200) setTranslate((prev) => prev + 100);
      else setTranslate((prev) => prev + 200);

      if (translate >= 0) toggleprev(false);
      if (translate > -maxScroll) togglenext(true);
    } else {
      if (translate < -(maxScroll - 200)) setTranslate((prev) => prev - 100);
      else setTranslate((prev) => prev - 200);
      if (translate < 0) toggleprev(true);
      if (translate < -(maxScroll - 100)) togglenext(false);
    }
  };
  React.useEffect(() => {
    for (let item of rowReference.current) {
      item.style.transform = "translateX(" + translate + "px" + ")";
    }
  }, [translate]);

  // we have to specify fetchUrl since we are calling it in the useEffect
  return (
    <div className="row">
      <h2>{title}</h2>
      {window.screen.width > 450 && prevbtndisplay && (
        <div>
          <IconContext.Provider value={{ size: "3em", color: "white" }}>
            <FaAngleLeft
              className="prevbtn"
              onClick={() => togglescroll("left")}
            />
          </IconContext.Provider>
        </div>
      )}

      <div
        className={isLargeRow ? "row_posters big" : "row_posters"}
        ref={bigRowReference}
      >
        {movies.map((item, i) => (
          <img
            key={item.id}
            onClick={() => handleClick(item)}
            className="row_poster"
            src={`${url}${isLargeRow ? item.poster_path : item.backdrop_path}`}
            alt={item.name}
            loading="lazy"
            ref={(el) => (rowReference.current[i] = el)}
          />
        ))}
      </div>
      {window.screen.width > 450 && nextbtndisplay && (
        <div>
          <IconContext.Provider value={{ size: "3em" }}>
            <FaAngleRight
              className="nextbtn"
              onClick={() => togglescroll("right")}
            />
          </IconContext.Provider>
        </div>
      )}

      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}
