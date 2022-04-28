let movies_div = document.getElementById("movies");
let movie_wait;
let appendMoviesDiv = document.getElementById("appendMoviesDiv");
async function searchMovie() {
  try {
    let movie = document.getElementById("movie").value;

    if (movie.length <= 2) {
      return false;
    }
    let url = `http://www.omdbapi.com/?apikey=5aad6871&s=${movie}`;
    let response = await fetch(url);

    let data = await response.json();

    let movies_arr = data.Search;
    appendMovie(movies_arr);
  } catch (err) {
    console.log(err);
  }
}
function appendMovie(movies) {
  movies_div.innerHTML = null;

  if (movies == undefined) {
    return false;
  }

  movies.forEach(function (element) {
    let p = document.createElement("p");
    p.setAttribute("id", "pSearch");
    p.addEventListener("click", function () {
      // searchMovie(p);
      console.log(element);
      appendDivMovie(element);
    });
    p.innerHTML = element.Title;

    movies_div.append(p);
  });
}
function appendDivMovie(ele) {
  appendMoviesDiv.innerHTML = "";

  let poster = document.createElement("img");
  poster.src = ele.Poster;

  let title = document.createElement("h2");
  title.innerHTML = ele.Title;

  let year = document.createElement("h3");
  year.innerHTML = `Released Year: ${ele.Year}`;
  appendMoviesDiv.append(poster, title, year);
}

function debounce(func, delay) {
  if (movie_wait) {
    clearTimeout(movie_wait);
  }
  movie_wait = setTimeout(function () {
    func();
  }, delay);
}
