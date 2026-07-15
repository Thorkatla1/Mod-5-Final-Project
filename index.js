console.log("hello world");

async function main() {
  const response = await fetch(
    "https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies-2020s.json",
  );
  const movieData = await response.json();
  const movies = movieData.slice(0, 6);
  console.log(movies);
}
main();

async function renderMovies(filter) {
  const moviesWrapper = document.querySelector(".movies");
  moviesWrapper.classList.add("movies__loading");
  if (!movies) {
    movies = await getmovies();
  }
  moviesWrapper.classList.remove("movies__loading");
}

function filterMovies(filter) {
  if (filter === "A TO Z") {
    movies.sort((a, b) => a.title.localeCompare(b.title));
  } else if (filter === "Z TO A") {
    movies.sort((a, b) => b.title.localeCompare(a.title));
  } else if (filter === "OLDEST TO NEWEST") {
    movie.sort((a, b) => a.year - b.year);
  } else if (filter === "NEWEST TO OLDEST") {
    movie.sort((a, b) => b.year - a.year);
  }
  async function renderMovies(filter) {
    const moviesWrapper = document.querySelector(".movies");
    moviesWrapper.classList.add("movies__loading");

    if (!movies) {
      movies = await getmovies();
    }

    moviesWrapper.classList.remove("movies__loading");
  }
}
function displayMovie(movie) {
  console.log(movie.Title);
  console.log(movie.Year);
  console.log(movie.Poster);
}

main();
// console.log(movieData);
