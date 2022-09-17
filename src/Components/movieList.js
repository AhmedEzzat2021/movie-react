import React from "react";
import { Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import PaginationPages from "./PaginationPages";

const MovieList = ({ movies, getPageMovies, pageCount }) => {
  return (
    <Row className="justify-content-around">
      {movies.length >= 1 ? (
        movies.map(mov => {
          return <MovieCard id={mov.id} mov={mov} key={mov.id} />;
        })
      ) : (
        <h3>No movie found!..</h3>
      )}

      {movies.length >= 1 ? <PaginationPages getPageMovies={getPageMovies} pageCount={pageCount} /> : null}
    </Row>
  );
};
export default MovieList;
