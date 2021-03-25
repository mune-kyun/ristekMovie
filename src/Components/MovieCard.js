import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../css/MovieCard.css";

const API = "http://image.tmdb.org/t/p/w500";

function MovieCard({
  data,
  cardMode = 0,
  showOption = true,
  deleteOption = false,
}) {
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

  function handleDelete(id) {
    let key = "";
    if (cardMode == 0) key = "liked-data";
    else if (cardMode == 1) key = "bookmarked-data";
    let list =
      (localStorage.getItem(key) && JSON.parse(localStorage.getItem(key))) ||
      [];
    list = list.filter((item) => item != id);
    localStorage.setItem(key, JSON.stringify(list));
    toast.success("Movie has been successfully deleted");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

  return (
    <div class="card">
      <img src={API + data.poster_path} />

      <div class="card-info">
        <Link to={"/detailPage/" + data.id} style={{ textDecoration: "none" }}>
          <div class="title">{data.title}</div>
        </Link>
      </div>
      <div class="user-option">
        {showOption && (
          <>
            <i
              class="far fa-heart clicked-icon"
              aria-hidden="true"
              onClick={() => {
                handleAdd(data.id, 0);
              }}
            />
            <i
              class="fa fa-plus-square-o clicked-icon"
              aria-hidden="true"
              onClick={() => {
                handleAdd(data.id, 1);
              }}
            />
          </>
        )}
        {deleteOption && (
          <i
            class="fas fa-trash-alt clicked-icon"
            aria-hidden="true"
            onClick={() => {
              handleDelete(data.id);
            }}
          />
        )}
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </div>
  );
}

export default MovieCard;
