function calificarPelicula(pelicula) {
  if (isNaN(pelicula.rating) || pelicula.rating === "") return null
  if (parseFloat(pelicula.rating) > 8.5) {
    return "buena";
  } else if (parseFloat(pelicula.rating) > 6) {
    return "normal";
  } else {
    return "mala";
  }
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
  if (typeof data.tags[0] === 'object' && data.tags[0].hasOwnProperty('name')) {
    let tagsformateadas = "";
    for (let index = 0; index < data.tags.length; index++) {
      const element = data.tags[index];
      if (index === 0) {
        tagsformateadas = element.name;
      } else {
        tagsformateadas += ", " + element.name;
      }
    }
    return tagsformateadas;
  } else {
    return null
  }
}

function validarSiEsNuevaPelicula(date) {
  var fecha = new Date().getFullYear();
  if(date.year > fecha || isNaN(date.year)){
    return null
  }
  if (date.year > 2017) {
    return true;
  } else {
    return false;
  }
}

function comprobarDatosObligatorios(peli) {
  if (peli.title.length < 2 || typeof peli.title !== "string") {
    return false;
  }
  if (typeof peli.img !== "string") {
    return false;
  }
  if (typeof peli.rating !== "string" && /^[0-9]+$/.test(peli.rating)) {
    return false;
  }
  if (typeof peli.year !== "string" && /^[0-9]+$/.test(peli.rating)) {
    return false;
  }
  if (!Array.isArray(peli.tags)) {
    return false;
  }
  if (peli.description.length < 50 || typeof peli.description !== "string") {
    return false;
  }
  return true;
}
