function calificarPelicula(pelicula) {
  console.log(pelicula);
}

function crearPeliculaenHtmlConJquery(movie) {
  return (
    '<li class="movie"><img class="movie__image" src="' +
    movie.img +
    '" alt=""><div class="movie__summary"><div><h2 class="movie__title">' +
    movie.title +
    '</h2><span class="year">(' +
    movie.year +
    ')</span></div><div><img class="movie__star" src="https://img.icons8.com/plasticine/2x/star--v1.png" alt=""><span class="movie__rate">' +
    movie.rating +
    '</span><span class="genre"> ' +
    movie.tags[0].name +
    '</span></div><p class="movie__description">' +
    movie.description +
    "</p></div></li>"
  );
}

function formatearMovieTagsToString(data) {
  console.log(data);
}

function validarSiEsNuevaPelicula(date) {
  console.log(date);
}

function comprobarDatosObligatorios(peli) {
  console.log(peli);
}
