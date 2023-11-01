import React from "react";
import { Link } from "react-router-dom";


function MoviesList({movies}) {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default MoviesList;