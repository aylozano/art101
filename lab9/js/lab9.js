/**
 * Author:    Andrik Lozano
 * Created:   10/31/2022
 *
 * (c) Copyright by potatoe corp.
 **/

var outputEl = document.getElementById("output");
var new1El = document.createElement("p");
var new2El = document.createElement("p");

new1El.innerHTML="This paragrapgh says nothing useful.";
new2El.innerHTML="This paragraph is cool";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

new1El.style.color="linen";
new2El.style.fontSize="80px";

var putMeBefore = document.createElement("div");
putMeBefore.style.height="40px";
putMeBefore.style.width="50px";
putMeBefore.style.backgroundColor="blue";

outputEl.insertBefore(putMeBefore, outputEl.firstChild);


function messageButton(){
  console.log("Whatever");
}
var buttonEl = document.getElementById("exampleButton");
buttonEl.addEventListener("dblclick", messageButton());
