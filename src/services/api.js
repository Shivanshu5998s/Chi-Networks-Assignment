const API_KEY = "YOUR_ACTUAL_OMDB_API_KEY";
const imdbID = "2a10424d";

fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data); 
  })
  .catch((error) => {
    console.error("Error fetching movie details:", error);
  });
