import React from "react";

const Favorites = ({ favorites }) => {
  return (
    <div>
      {favorites.map((favorite) => (
        <div key={favorite.imdbID}>
          <h2>{favorite.Title}</h2>
          {/* Display other details */}
        </div>
      ))}
    </div>
  );
};

export default Favorites;
