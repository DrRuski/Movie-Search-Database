import { useState } from "react";
import NavBar from "./components/header";
import Main from "./components/main";
import Box from "./components/misc/box";
import { tempMovieData, tempWatchedData } from "./data/movieData";
import { MovieList } from "./components/List/ListBox";
import * as nav from "./components/nav/nav";
import {
  WatchedMoviesList,
  WatchedSummary,
} from "./components/List/WatchedBox";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  return (
    <>
      <NavBar>
        <nav.Logo />
        <nav.Search />
        <nav.Results movies={movies} />
      </NavBar>
      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
