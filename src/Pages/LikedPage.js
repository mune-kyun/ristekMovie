import React, { useState } from "react";
import MovieCardById from "../Components/MovieCardById";

import "../css/LikedPage.css";

export default function LikedPage() {
  const [movies, setmovies] = useState(
    (localStorage.getItem("liked-data") &&
      JSON.parse(localStorage.getItem("liked-data"))) ||
      []
  );

  function handleClearList() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div class="container">
      <button class="reset-button" onClick={handleClearList}>
        CLEAR
      </button>
      <div class="movie-list">
        {movies.map((result) => {
          return <MovieCardById id={result} />;
        })}
      </div>
    </div>
  );
}
