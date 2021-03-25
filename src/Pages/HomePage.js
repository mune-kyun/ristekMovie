import React, { useState, useEffect, useRef } from "react";
import MovieCard from "../Components/MovieCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../css/HomePage.css";

export default function HomePage() {
  const [search, setsearch] = useState("");
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((result) => {
        setmovies(result.results);
      });
  }, []);

  function handleSearch(e) {
    setsearch(e.target.value);
  }

  function handleButton() {
    toast.success("Searching for  " + search);
    setsearch("");
    if (search != "") {
      fetch(API_SEARCH + search.replace(/\s/g, "+"))
        .then((response) => response.json())
        .then((result) => {
          setmovies(result.results);
        });
    }
  }

  return (
    <div class="container">
      <div class="search-feature">
        <input
          class="search-input"
          type="text"
          placeholder="Search movie by title..."
          onChange={handleSearch}
          value={search}
        />
        <button class="search-button" onClick={handleButton}>
          <i class="fa fa-search"></i>
        </button>
      </div>
      <div class="movie-list">
        {movies.map((result) => {
          return <MovieCard data={result} />;
        })}
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

const API_KEY = "?api_key=d15653e03aaf16d4973082761657a24f";

const API =
  "https://api.themoviedb.org/3/movie/popular" +
  API_KEY +
  "&language=en-US&page=1";

const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie" + API_KEY + "&query=";
