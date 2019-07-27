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
