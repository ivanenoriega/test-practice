var should = chai.should;
var expect = chai.expect;
var assert = chai.assert;

describe("validar la funcion calificar pelicula", function () {
  it(`La pelicula deberia ser buena`, function () {
    expect(calificarPelicula({ rating: "10" })).to.equal("buena");
  });
  it(`La pelicula deberia ser normal`, function () {
    expect(calificarPelicula({ rating: "7" })).to.equal("normal");
  });
  it(`La pelicula deberia ser mala`, function () {
    expect(calificarPelicula({ rating: "2" })).to.equal("mala");
  });
  it(`La pelicula deberia ser null 1....1`, function () {
    expect(calificarPelicula({ rating: "1....1" })).to.equal(null);
  });
  it(`La pelicula deberia ser null ""`, function () {
    expect(calificarPelicula({ rating: "" })).to.equal(null);
  });
  it(`La pelicula deberia ser null`, function () {
    expect(calificarPelicula({ rating: "asdawda" })).to.equal(null);
  });
});

describe("validar si la peli es nueva", function () {
  it(`validarSiEsNuevaPelicula({year: "2019"})`, function () {
    expect(validarSiEsNuevaPelicula({ year: '2019' })).to.equal(true);
  });
  it(`validarSiEsNuevaPelicula({year: "2018"})`, function () {
    expect(validarSiEsNuevaPelicula({ year: '2018' })).to.equal(true);
  });
  it(`validarSiEsNuevaPelicula({year: "1998"})`, function () {
    expect(validarSiEsNuevaPelicula({ year: '1998' })).to.equal(false);
  });
  it(`validarSiEsNuevaPelicula({year: "2021"})`, function () {
    expect(validarSiEsNuevaPelicula({ year: '2021' })).to.equal(null);
  });
  it(`validarSiEsNuevaPelicula({year: "asdwad"})`, function () {
    expect(validarSiEsNuevaPelicula({ year: 'asdwad' })).to.equal(null);
  });
  it("calificarPelicula test con rating '2019dasd'", function () {
    expect(validarSiEsNuevaPelicula({ year: '2019dasd' })).to.equal(null);
  });
});

describe("comprobarDatosObligatorios", function () {
  it("comprobarDatosObligatorios prueba 1", function () {
    var resultado = comprobarDatosObligatorios({ img: "https://image.tmdb.org/t/p/w185/zgB9CCTDlXRv50Z70ZI4elJtNEk.jpg", rating: "10", title: "movie_name", year: "1995", tags: [{ name: "tag_name" },], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' });
    var esperado = true;
    expect(resultado).to.equal(esperado);
  });
  it("comprobarDatosObligatorios prueba 2", function () {
    var resultado = comprobarDatosObligatorios({ img: "https://image.tmdb.org/t/p/w185/zgB9CCTDlXRv50Z70ZI4elJtNEk.jpg", rating: 10, title: "movie_name", year: "1995", tags: [{ name: "tag_name" },], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' });
    var esperado = false;
    expect(resultado).to.equal(esperado);
  });
  it("comprobarDatosObligatorios prueba 3", function () {
    var resultado = comprobarDatosObligatorios({ img: "https://image.tmdb.org/t/p/w185/zgB9CCTDlXRv50Z70ZI4elJtNEk.jpg", rating: "10", title: "movie_name", year: 1995, tags: [{ name: "tag_name" },], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' });
    var esperado = false;
    expect(resultado).to.equal(esperado);
  });
  it("comprobarDatosObligatorios prueba 4", function () {
    var resultado = comprobarDatosObligatorios({ img: "https://image.tmdb.org/t/p/w185/zgB9CCTDlXRv50Z70ZI4elJtNEk.jpg", rating: "10", title: "movie_name", year: "1995", tags: ["tag_name"], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' });
    var esperado = false;
    expect(resultado).to.equal(esperado);
  });
  it("comprobarDatosObligatorios prueba 5", function () {
    var resultado = comprobarDatosObligatorios({ img: "https://image.tmdb.org/t/p/w185/zgB9CCTDlXRv50Z70ZI4elJtNEk.jpg", rating: "10", title: "movie_name", year: "1995", tags: [{ name: "tag_name" },], description: 'Lorem ipsum dolor sit amet' });
    var esperado = false;
    expect(resultado).to.equal(esperado);
  });
  it("comprobarDatosObligatorios prueba 6", function () {
    var resultado = comprobarDatosObligatorios({ img: "https://image.tmdb.org/t/p/w185/zgB9CCTDlXRv50Z70ZI4elJtNEk.jpg", rating: "10", title: "m", year: "1995", tags: [{ name: "tag_name" },], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' });
    var esperado = false;
    expect(resultado).to.equal(esperado);
  });
  it("comprobarDatosObligatorios prueba 7", function () {
    var resultado = comprobarDatosObligatorios({ img: "zgB9CCTDlXRv50Z70ZI4elJtNEk.jpg", rating: "10", title: "movie_name", year: "1995", tags: [{ name: "tag_name" },], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' });
    var esperado = false;
    expect(resultado).to.equal(esperado);
  });
});

describe("formatearMovieTagsToString", function(){
  /*
  Esta funcion debe formatear los tags de la pelicula para devolver un string donde estos tags estan separados por una ",". La funcion hace un return de un string con el formato "tag1, tag2, tag3".
  */
 it("Prueba 1", function(){
   var data = {
     tags: [{name: "tag1"}, {name: "tag2"}, {name: "tag3"}]
   }
   var resultado = formatearMovieTagsToString(data);
   var esperado = "tag1, tag2, tag3";
   assert.equal(resultado, esperado );   
 });
 it("Prueba 2", function(){
   var data = { 
     tags: [{name: "tag1"}, {name: "tag2"}]
    };
   var resultado = formatearMovieTagsToString(data);  
   var esperado = "tag1, tag2";
   assert.equal(resultado, esperado);
 });
 it("Prueba 3", function(){
   var data = { 
     tags: [{name: "tag1"}]
   };
   var resultado = formatearMovieTagsToString(data);
   var esperado = "tag1";
   assert.equal(resultado, esperado);
 });
 it("Prueba 4", function(){
   var data = { 
     tags: [{names: "tag1"}, {names: "tag2"}, {names: "tag3"}]
   };
   var resultado = formatearMovieTagsToString(data);
   var esperado = null;
   assert.equal(resultado, esperado);
 });
 it("Prueba 5", function(){
   var data = { 
     tags: ["tag1"]
   };
   var resultado = formatearMovieTagsToString(data);
   assert.equal(resultado, null);   
 });
});
