fetch("assets/json/movies.json")
    .then(fetchResponse => fetchResponse.json())
    .then(jsonContent => {
        jsonContent.results.map((movie, index) => {
            //Création de la div contenant les infos du film
            let movieDiv = document.createElement("div")
            movieDiv.id = "TMMDB" + movie.id
            movieDiv.className = "col-3 row"
            //Ajout de l'image
            let movieImg = document.createElement("img")
            movieImg.className = "col-6"
            movieImg.src = movie.poster_path
            //Création de la div qui contient les infos du film sauf l'image
            
            //Création du h2 contenant le titre du film
            let movieTitle = document.createElement("h2")
            movieTitle.innerText = movie.original_title
            movieTitle.className = "h5"
            //Accorche des éléments HTML virtuel au DOM
            movieDiv.appendChild(movieImg)
            movieDiv.appendChild(movieTitle)
            movieContent.appendChild(movieDiv)
        })
    })
    .catch(err => console.error(err))