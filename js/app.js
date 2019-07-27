const person4Request = new XMLHttpRequest();
person4Request.addEventListener("load", function() {
  person4Object = JSON.parse(this.responseText);
  document.getElementById("person4Name").innerHTML = person4Object.name;

  const homeWorldRequest = new XMLHttpRequest();
  homeWorldRequest.addEventListener("load", function() {
    homeWorldObject = JSON.parse(this.responseText);
    document.getElementById("person4HomeWorld").innerHTML =
      homeWorldObject.name;
  });
  homeWorldRequest.open("GET", person4Object.homeworld);
  homeWorldRequest.send();
});
person4Request.open("GET", "https://swapi.co/api/people/4/");
person4Request.send();

const person14Request = new XMLHttpRequest();
person14Request.addEventListener("load", function() {
  person14Object = JSON.parse(this.responseText);
  document.getElementById("person14Name").innerHTML = person14Object.name;

  const speciesRequest = new XMLHttpRequest();
  speciesRequest.addEventListener("load", function() {
    speciesObject = JSON.parse(this.responseText);
    document.getElementById("person14Species").innerHTML = speciesObject.name;
  });
  speciesRequest.open("GET", person14Object.species);
  speciesRequest.send();
});
person14Request.open("GET", "https://swapi.co/api/people/14/");
person14Request.send();

const filmsRequest = new XMLHttpRequest();
filmsRequest.addEventListener("load", function() {
  filmsObject = JSON.parse(this.responseText);
  for (i = 0; i < filmsObject.results.length; i++) {
    let film = document.createElement("li");
    film.className = "film";
    filmList.appendChild(film);
    let h2 = document.createElement("h2");
    h2.className = "filmTitle";
    h2.innerHTML = filmsObject.results[i].title;
    film.appendChild(h2);
    let h3 = document.createElement("h3");
    h3.innerHTML = "Planets";
    film.appendChild(h3);
    let ul = document.createElement("ul");
    ul.className = "filmPlanets";
    film.appendChild(ul);
    for (j = 0; j < filmsObject.results[i].planets.length; j++) {
      let li = document.createElement("li");
      li.className = "planet";
      ul.appendChild(li);
      let h4 = document.createElement("h4");
      h4.className = "planetName";
      li.appendChild(h4);
      let planetRequest = new XMLHttpRequest();
      planetRequest.addEventListener("load", function() {
        planetObject = JSON.parse(this.responseText);
        h4.innerHTML = planetObject.name;
      });
      planetRequest.open("GET", filmsObject.results[i].planets[j]);
      planetRequest.send();
    }
  }
});
filmsRequest.open("GET", "https://swapi.co/api/films/");
filmsRequest.send();
