console.log("hello world");

const moviesList = document.querySelector(".movies__list");
// const posterRef = document.querySelector(".poster");
// console.log(posterRef);
let movies = [];
async function main(movieName) {
  const response = await fetch(
    `https://www.omdbapi.com/?s=${movieName}&apikey=3a3dec69`,
  );
  console.log(movieName);
  movieData = await response.json();
  console.log(movieData);
  movies = movieData.Search.slice(0, 6);


  // Q: how do i know this will show 10 in the console?
  // A:  this individual api is coded to show only 10 in the console.
}

function inputData(event) {
  main(event.target.value);
  console.log(event.target.value);
}

function filterMovies(event) {
  const filter = event.target.value;
  console.log(filter);
  if (filter === "A_TO_Z") {
    movies.sort((a, b) => a.Title.localeCompare(b.Title));
  } else if (filter === "Z_TO_A") {
    movies.sort((a, b) => b.Title.localeCompare(a.Title));
  } else if (filter === "OLDEST_TO-NEWEST") {
    movies.sort((a, b) => a.Year - b.Year); // Ensure you're sorting based on the Year property
  } else if (filter === "NEWEST_TO_OLDEST") {
    movies.sort((a, b) => b.Year - a.Year);
  } else {
    console.warn("Filter option not recognized");
  }
  console.log(filterMovies);
}

async function renderMovies(filter) {
  const moviesWrapper = document.querySelector(".movies");
  moviesWrapper.classList.add("movies__loading");
  if (!movies) {
    movies = await getMovies();
  }
  moviesWrapper.classList.remove("movies__loading");
    document.querySelector(".movies__list").innerHTML = movies
    .map((movie) => {
      return `<img class = "img__poster" src="${movie.Poster}" alt="${movie.Title}">`;
    })
    .join("");
}

function displayMovie(movie) {
  console.log(movie.Title);
  console.log(movie.Year);
  console.log(movie.Poster);
}
