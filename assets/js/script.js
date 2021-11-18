let uri = "top_rated"
popular.addEventListener("click", function () {
    uri = "popular"
    searchMovie()
})
upcoming.addEventListener("click", function () {
    uri = "upcoming"
    searchMovie()
})
toprated.addEventListener("click", function () {
    uri = "top_rated"
    searchMovie()
})


const searchMovie = () => {
    fetch("https://api.themoviedb.org/3/movie/" + uri + "?api_key=422b833333d1f4fa0076a5485ecd66e2&language=fr-fr")
        .then(fetchResponse => fetchResponse.json())
        .then(jsonContent => {
            clearMovie()
            jsonContent.results.map((movie, index) => {
                //Création de la div contenant les infos du film
                let movieDiv = document.createElement("div")
                movieDiv.id = "TMMDB" + movie.id
                movieDiv.className = "col-3 row p-1"
                //Ajout de l'image
                let movieImg = document.createElement("img")
                movieImg.className = "col-6"
                movieImg.src = "https://image.tmdb.org/t/p/original" + movie.poster_path
                //Création de la div qui contient les infos du film sauf l'image
                let movieInfo = document.createElement("div")
                movieInfo.className = "col-6"
                //Création du h2 contenant le titre du film
                let movieTitle = document.createElement("h2")
                movieTitle.innerText = movie.original_title
                movieTitle.className = "h5"
                //Ajout de la description du film
                let movieDesc = document.createElement("p")
                movieDesc.innerText = (movie.overview != "") ? movie.overview.substring(0, 100) + " ..." : null
                movieDesc.className = "movieDesc"
                //Gestion des étoiles
                movieStar = averageStar(movie.vote_average)
                //Accorche des éléments HTML virtuel au DOM
                movieInfo.append(movieTitle, movieDesc, movieStar)
                movieDiv.append(movieImg, movieInfo)
                movieContent.appendChild(movieDiv)

            })
        })
        .catch(err => console.error("Mon erreur est : " + err))
}

const averageStar = (graduation) => {
    //Est équivalent à graduation = graduation / 2
    graduation /= 2
    graduation = Math.round(graduation)
    let starDiv = document.createElement("div")
    //On boucle pour mettre des étoiles remplies
    for (let starFill = 1; starFill <= graduation; starFill++) {
        let starFillIcon = document.createElement("i")
        starFillIcon.className = "bi bi-star-fill"
        starDiv.appendChild(starFillIcon)
    }
    //Le nombre d'étoiles vide est égale au nombre max d'étoiles (5) moins le nombre d'étoiles remplie
    const starEmptyNumber = 5 - graduation
    //On boucle pour mettre des étoiles vides
    for (let starEmpty = 1; starEmpty <= starEmptyNumber; starEmpty++) {
        let starEmptyIcon = document.createElement("i")
        starEmptyIcon.className = "bi bi-star"
        starDiv.appendChild(starEmptyIcon)
    }
    //On renvoit la div contenant les icones
    return starDiv
}
const clearMovie = () =>{
    movieContent.innerText = ""
}

searchMovie()