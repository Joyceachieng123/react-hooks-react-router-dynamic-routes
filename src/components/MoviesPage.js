import React from "react";
import { Route,useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  const { url } = useRouteMatch(); 
  return (
    <div>
      <h1>Movies Page</h1>
      <MoviesList movies={movies} />
      <Route path={`${url}/:movieId`}>
        <MovieShow movies={movies}/>
      </Route>
    </div>
  );
}
export default MoviesPage;
