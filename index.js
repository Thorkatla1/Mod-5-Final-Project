console.log("hello world");

async function main() {
  const response = await fetch(
    "https://api.sampleapis.com/movies/action-adventure",
  );

  const movies = await response.json();

  console.log(movies);
}

main();

// async function main() {
//   const movies = await fetch(
//     "http://www.omdbapi.com/?i=tt3896198&apikey=3a3dec69",
//   );

//   const movieData = await movies.json();

//   console.log(movieData);
//   const movieCard = `<div class="movie-card"></div>`;
//   console.log(movieCard);
// }
// main();

// function filterMovies(element) {
//   if (filter === "A TO z") {
//     movies.sort((a, b) => a.title - b.title);
//   } else if (filter === "Z TO A") {
//     movies.sort((a, b) => b.title - a.title);
//   } else if (filter === "OLDEST TO NEWEST") {
//     movie.sort((a, b) => a.year - b.year);
//   } else if (filter === "NEWEST TO OLDEST") {
//     movie.sort((a, b) => b.year - a.year);
//   }
// }
// function displayMovie(movie) {
//   console.log(movie.Title);
//   console.log(movie.Year);
//   console.log(movie.Poster);
// }
// main();
// console.log(movieData);
// // Select Top Movies: Extract the top 6 movies from the parsed data.
// // Sort Movies: Sort the movie array based on your criteria (e.g., rating, popularity).
// // Select Top 6: Use .slice(0, 6) to get the first six movies from the sorted array.
// // Display on Webpage: Loop through the selected movies and dynamically create HTML elements to display them.
// // Display Movies: Use console.log() or manipulate the DOM to display the movie titles and details on your webpage.
// // Handle Errors: Implement error handling using .catch() to manage any issues during the fetch process.
