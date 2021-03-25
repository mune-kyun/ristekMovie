import React, { useState } from "react";
import MovieCardById from "../Components/MovieCardById";

import "../css/ListPage.css";

export default function ListPage({ localData }) {
  const [movies, setmovies] = useState(
    (localStorage.getItem(localData) &&
      JSON.parse(localStorage.getItem(localData))) ||
      []
  );

  function handleClearList() {
    localStorage.removeItem(localData);
    window.location.reload();
  }

  return (
    <div class="container">
      <button class="reset-button" onClick={handleClearList}>
        CLEAR LIST
      </button>
      <div class="movie-list">
        {movies.map((result) => {
          return (
            <MovieCardById
              id={result}
              cardMode={localData == "liked-data" ? 0 : 1}
            />
          );
        })}
      </div>
    </div>
  );
}
