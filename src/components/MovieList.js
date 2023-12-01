import React from "react";

const MovieList = ({ movies, handleFavorite }) => {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <h2>{movie.Title}</h2>
          {/* Display other movie details */}
          <button onClick={() => handleFavorite(movie)}>
            Add to Favorites
          </button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
