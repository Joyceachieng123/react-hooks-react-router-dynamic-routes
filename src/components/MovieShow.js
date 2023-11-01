// MovieShow.js

import React from "react";
import { useParams } from "react-router-dom";


function MovieShow({movies}) {
  const { movieId } = useParams();
  const movie = movies.find((m) => m.id === parseInt(movieId));

  if (!movie) return <div>Movie not found</div>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      </div>
  );
}

export default MovieShow;
