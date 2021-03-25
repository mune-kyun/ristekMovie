import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

export default function MovieCardById({ id, cardMode = 0 }) {
  const [data, setdata] = useState("");

  useEffect(() => {
    fetch(API + id + APIKEY)
      .then((response) => response.json())
      .then((result) => {
        setdata(result);
      });
  }, []);

  return (
    <MovieCard
      data={data}
      cardMode={cardMode}
      deleteOption={true}
      showOption={false}
    />
  );
}

const API = "https://api.themoviedb.org/3/movie/";

const APIKEY =
  "?api_key=d15653e03aaf16d4973082761657a24f&language=en-US&page=1";
