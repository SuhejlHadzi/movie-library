import React, { useState } from "react";
import Globalstyle from './theme/Globalstyle'
import { ThemeProvider } from "styled-components";
import light from "./theme/light";
import dark from "./theme/dark";
import Header from "./components/Header";
import MovieResult from "./components/MovieResult";
import Welcome from "./components/Welcome";
import Loading from "./components/Loading";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


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
    <ThemeProvider theme={isDarkMode ? dark : light}>
      <Globalstyle />
<Router>
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
        <Route path="/search"><MovieResult movies={movies}/></Route>
         <Route path="/" exact> <Welcome setLoading={setLoading} /> </Route> 
      </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
