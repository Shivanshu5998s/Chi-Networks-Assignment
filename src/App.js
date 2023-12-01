import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import { fetchMovies } from "./services/api";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleSearch = async (query) => {
    try {
      const data = await fetchMovies(query);
      setMovies(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleFavorite = (movie) => {
    const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

    if (isFavorite) {
      const updatedFavorites = favorites.filter(
        (fav) => fav.imdbID !== movie.imdbID
      );
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = [...favorites, movie];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  return (
    <div>
      <h1>Movie Suggestion App</h1>
      <SearchBar handleSearch={handleSearch} />
      <MovieList movies={movies} handleFavorite={handleFavorite} />
      {/* Implement routing and other functionalities */}
    </div>
  );
};

export default App;
