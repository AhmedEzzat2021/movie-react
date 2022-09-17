import NavbarComp from "./Components/Navbar";
import MovieList from "./Components/movieList";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { DetailsMovie } from "./Components/DetailsMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  //Get all movies
  const getAllMovies = async () => {
    let res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=3d19add6a06a9c36a940b0205563cf33&language=ar"
    );
    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  };

  // Get movies in every single page
  const getPageMovies = async page => {
    let res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=3d19add6a06a9c36a940b0205563cf33&page=${page}`
    );
    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  };

  //search movies logic
  const serachMovies = async word => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=3d19add6a06a9c36a940b0205563cf33&query=${word}&language=ar`
      );
      setMovies(res.data.results);
      setPageCount(res.data.total_pages);
    }
  };

  //render all movies once
  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <div className="App">
      <NavbarComp serachMovies={serachMovies} />
      <Container className="mt-5" fluid>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<MovieList movies={movies} getPageMovies={getPageMovies} pageCount={pageCount} />}
            />
            <Route path="/movie/:id" element={<DetailsMovie />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
