import React, { useState, useEffect } from "react";
import "./App.css";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import lightTheme from "./theme/light";
import darkTheme from "./theme/dark";
import Header from "./components/Header";
import MovieResult from "./components/MovieResult";
import Welcome from "./components/Welcome";
import Loading from "./components/Loading";

const Globalstyle = createGlobalStyle`
  body {
  background: ${(props) => props.theme.color.background};
  transition: background 0.3s;
  }
`;

function App() {
  const stored = localStorage.getItem("isDarkMode");
  const [isDarkMode, setIsDarkMode] = useState(
    stored === "true" ? true : false
  );
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=87cea0f090383f2c0b68efa858648b0b&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Globalstyle />

      <div className="container">
        {loading ? <Loading /> : ""}
        <Header
          searchMovies={searchMovies}
          query={query}
          setQuery={setQuery}
          movies={movies}
          setMovies={setMovies}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
        {movies.length === 0 ? "" : <MovieResult movies={movies} />}
        {movies.length === 0 ? <Welcome setLoading={setLoading} /> : ""}
      </div>
    </ThemeProvider>
  );
}

export default App;
