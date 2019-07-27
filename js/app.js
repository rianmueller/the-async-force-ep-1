// document.getElementById("person4Name").innerHTML = "";
// document.getElementById("person4HomeWorld").innerHTML = "";
// document.getElementById("person14Name").innerHTML = "";
// document.getElementById("person14Species").innerHTML = "";

const person4Request = new XMLHttpRequest();
person4Request.addEventListener("load", person4RequestListener);
person4Request.open("GET", "https://swapi.co/api/people/4/");
person4Request.send();

function person4RequestListener() {
  person4Object = JSON.parse(this.responseText);
  document.getElementById("person4Name").innerHTML = person4Object.name;

  const homeWorldRequest = new XMLHttpRequest();
  homeWorldRequest.addEventListener("load", homeWorldRequestListener);
  homeWorldRequest.open("GET", person4Object.homeworld);
  homeWorldRequest.send();
}

function homeWorldRequestListener() {
  homeWorldObject = JSON.parse(this.responseText);
  document.getElementById("person4HomeWorld").innerHTML = homeWorldObject.name;
}
