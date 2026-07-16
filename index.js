console.log("hello world");
const posterRef = document.querySelector(".poster");
console.log(posterRef);

async function main() {
  const response = await fetch(
    "https://www.omdbapi.com/?i=tt3896198&apikey=3a3dec69&",
  );
  const movieData = await response.json();
  posterRef.innerHTML = movieData.Poster;
  // const movies = movieData.slice(0, 50);
  console.log(movieData);
}
main();

// async function main() {
//   const response = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=3a3dec69");
//   const movieData = await response.json();
//   const movies = movieData.slice(0, 50);

  const moviesHtml = movies
    .map((movie) => {
      return `
        <div class="movie">
          <h3>${movie.poster}</h3>
        </div>
      `;
    })
    .join("");

//   document.querySelector(".movies__list").innerHTML = moviesHtml;
// }

// main();

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
    movies.sort((a, b) => a.Title.localeCompare(b.Title));
  } else if (filter === "Z TO A") {
    movies.sort((a, b) => b.Title.localeCompare(a.Title));
  } else if (filter === "OLDEST TO NEWEST") {
    movies.sort((a, b) => a.Year - b.Year); // Ensure you're sorting based on the Year property
  } else if (filter === "NEWEST TO OLDEST") {
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
}

function displayMovie(movie) {
  console.log(movie.Title);
  console.log(movie.Year);
  console.log(movie.Poster);
}
