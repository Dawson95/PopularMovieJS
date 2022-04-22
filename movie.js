function fetchMovie(apiKey = '3f951fde1f94ff23e3aebbd24b292474') {
   
    let resultSearch = document.getElementById('resultSearch');

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&langua
    ge=fr-FR&page=1`)
        .then(response => response.json())
        .then(movies => {
            
            movies.results.forEach(movie => {
                console.log(movie)
                const cadre = document.createElement('div')
                cadre.setAttribute('class','test')
                resultSearch.appendChild(cadre)

                const image = document.createElement('img');
                image.src = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+movie.poster_path;
                cadre.appendChild(image);
                
                const titre = document.createElement('h2')
                cadre.appendChild(titre)
                titre.innerText = movie.title
                
            });
        })
        .catch(err => console.log(err));
}