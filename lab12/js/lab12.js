/**
 * Author:    Pepito Maximiliano de la Tercera, Don Quijote de la Mancha.
 * Created:   54643/ 42645/ 6563
 *
 * (c) Copyright by what are u looking at?.
 **/

 function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Gryffindor"
  }
  else if (mod == 1) {
    return "Ravenclaw"
  }
  else if (mod == 2) {
    return "Slytherin"
  }
  else if (mod == 3) {
    return "Hufflepuff"
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p> La magia del profesor Wes Modes en programacion, ha decidido que te escuela deberia ser " + house + "</p>";
  document.getElementById("output2").innerHTML = newText;
})  
