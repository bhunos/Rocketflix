import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from "../src/api.js"

const moviesDiv = document.getElementById("movies")

async function getPopularMovies() {
  let data = []
  try{
    const response = await fetch(`${BASE_URL}movie/popular?${API_KEY}`)
    const responseData = await response.json()
    data = responseData?.results
    data.length = 1    
    console.log(data)
    // TODO
  } catch(error) {
    console.log('erro')
  }
  return data
}


async function renderMovies() {
  const movies = await getPopularMovies()
  moviesDiv.innerHTML = movies?.map(movie => renderSingleMovie(movie))
}
function renderSingleMovie(movie) {
  return (
    `
    <img src="${IMG_URL + movie?.poster_path}" alt="">
    <div class=" description">
    <h2>${movie?.original_title}</h2>
    <p>${movie?.overview}</p>
    </div>
    `
  )
}

renderMovies()