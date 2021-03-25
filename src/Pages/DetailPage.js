import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "../css/DetailPage.css";

export default function DetailPage(props) {
  const [data, setdata] = useState("");

  useEffect(() => {
    fetch(API + props.match.params.id + APIKEY)
      .then((response) => response.json())
      .then((result) => {
        setdata(result);
      });
  }, []);

  function handleAdd(id, mode) {
    const message = mode == 0 ? "liked" : "bookmarked";
    let key = mode == 0 ? "liked-data" : "bookmarked-data";
    let list =
      (localStorage.getItem(key) && JSON.parse(localStorage.getItem(key))) ||
      [];
    list = [...list, id];
    localStorage.setItem(key, JSON.stringify(list));
    toast.success("Movie has been successfully " + message);
  }

  return (
    <div class="container">
      <div class="detail-container">
        <div class="detail-info">
          <img class="detail-img" src={IMAGE_API + data.poster_path} />
          <div class="detail-right-side">
            <h1 class="detail-title">{data.original_title}</h1>
            <div class="detail-rating">
              <div class="rating">
                <i class="fas fa-3x fa-star" aria-hidden="true"></i>
                <p class="p-rating">{data.vote_average}</p>
              </div>
              <div class="rating">
                <i class="fas fa-3x fa-eye" aria-hidden="true"></i>
                <p class="p-rating">{data.popularity}</p>
              </div>
            </div>
            <h3>Synopsis</h3>
            <hr width="100%" />
            <p>{data.overview}</p>
            <h3>Site</h3>
            <hr width="100%" />
            {data.homepage != "" ? (
              <a class="undecorated-a" href={data.homepage} target="_blank">
                {data.homepage}
              </a>
            ) : (
              <p>-</p>
            )}
            <h3>Release Date</h3>
            <hr width="100%" />
            {data.release_date}
            <h3>Duration</h3>
            <hr width="100%" />
            {data.runtime} minutes
            <div class="detail-user-option">
              <div
                onClick={() => {
                  handleAdd(data.id, 0);
                }}
                class="detail-clicked-icon"
              >
                <i class="far fas fa-3x fa-heart" aria-hidden="true" />
                <p>Add to Like Page</p>
              </div>
              <div
                onClick={() => {
                  handleAdd(data.id, 1);
                }}
                class="detail-clicked-icon"
              >
                <i class="fa fas fa-3x fa-plus-square-o " aria-hidden="true" />
                <p>Add to Bookmark Page</p>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </div>
  );
}

const IMAGE_API = "http://image.tmdb.org/t/p/w400";

const API = "https://api.themoviedb.org/3/movie/";

const APIKEY =
  "?api_key=d15653e03aaf16d4973082761657a24f&language=en-US&page=1";

const genreDict = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};
