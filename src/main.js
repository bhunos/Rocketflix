import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from "../src/api.js"

const moviesDiv = document.getElementById("movie")



async function getPopularMovies() {
  let data = []
  
  try{
    const response = await fetch(`${BASE_URL}movie/popular?${API_KEY}`)
    const responseData = await response.json()
    
    function getRandonMovies(data) {
      data = responseData?.results      
      return data[Math.floor(Math.random() * data.length)]
    } 
    data = getRandonMovies(data)
    console.log(data)
  } catch(error) {
    console.log('error')
  }
  return [data]
  
}

async function renderMovies() {
  const movies = await getPopularMovies()
  moviesDiv.innerHTML = movies?.map(movie => renderSingleMovie(movie))
}
function renderSingleMovie(movie) {
  return (
    `
    <a id="movies" href="https://www.themoviedb.org/movie/${movie?.id}" __blank>
    <img src="${IMG_URL + movie?.poster_path}" alt="">
    <div class=" description">
    <h2>${movie?.original_title}</h2>
    <p>${movie?.overview}</p>
    </div>
    </a>
    `
  )
}

renderMovies()

let random = document.getElementById("buttonRandom")
random.addEventListener("click", function(){renderMovies()},false)
