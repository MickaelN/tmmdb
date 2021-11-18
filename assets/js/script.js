fetch("assets/json/movies.json")
    .then(toto => toto.json())
    .then(tata => console.log(tata.results))
    .catch(err => console.error(err))