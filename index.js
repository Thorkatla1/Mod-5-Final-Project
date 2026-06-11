console.log("hello world");


// connect api




// link button to render movies




let movies;

async function renderMovies(filter) {
  const moviesWrapper = document.querySelector(".movies");

  moviesWrapper.classList += ' movie__loading'

  if (!movies) {
    movies = await getMovies();
  }
  
  moviesWrapper.classList.remove('movies__loading')

  if (filter === "A_TO_Z") {
    movies.sort(
      (a, b) =>
        (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)
    );
  } else if (filter === "Z_TO_A") {
    movies.sort(
      (a, b) =>
        (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)
    );
  } else if (filter === "RATING") {
    movies.sort((a, b) => b.rating - a.rating);
  }


function filterMovies(event) {
  renderMovies(event.target.value);
}

setTimeout(() => {
  renderMovies();
})






}





