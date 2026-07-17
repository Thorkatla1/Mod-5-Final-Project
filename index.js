console.log("hello world");
// const posterRef = document.querySelector(".poster");
// console.log(posterRef);

async function main(movieName) {
  const response = await fetch(
    `https://www.omdbapi.com/?s=${movieName}&apikey=3a3dec69`,
  );
  console.log(movieName)
  const movieData = await response.json();
  console.log(movieData);
  const movies = movieData.Search.slice(0, 6);

  document.querySelector(".movies__list").innerHTML = movies
    .map((movie) => {
      return `<img src="${movie.Poster}" alt="${movie.Title}">`;
    })
    .join("");
  // how do i know this will show 10 in the console? comes from this individual api
}

function inputData(event) {
  main(event.target.value);
  console.log(event.target.value);
}

// function filterMovies(filter) {
//   if (filter === "A TO Z") {
//     movies.sort((a, b) => a.Title.localeCompare(b.Title));
//   } else if (filter === "Z TO A") {
//     movies.sort((a, b) => b.Title.localeCompare(a.Title));
//   } else if (filter === "OLDEST TO NEWEST") {
//     movies.sort((a, b) => a.Year - b.Year); // Ensure you're sorting based on the Year property
//   } else if (filter === "NEWEST TO OLDEST") {
//     movies.sort((a, b) => b.Year - a.Year);
//   } else {
//     console.warn("Filter option not recognized");
//   }
//   console.log(filterMovies);
// }

async function renderMovies(filter) {
  const moviesWrapper = document.querySelector(".movies");
  moviesWrapper.classList.add("movies__loading");
  if (!movies) {
    movies = await getMovies();
  }
  moviesWrapper.classList.remove("movies__loading");
}

function displayMovie(movie) {
  console.log(movie.Title);
  console.log(movie.Year);
  console.log(movie.Poster);
}
