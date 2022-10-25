/**
 * Author:    Andrik Lozano
 * Created:   10/24/2022
 *
 * (c) Copyright by potatoe corp.
 **/

function sortUserName() {
  var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  console.log("userName =", userName);
  // split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // sort the nameArray
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  //join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("namesorted =", nameSorted)
  // Easily? userName.toLower().split("").sort().join("");
  return nameSorted;
}

//Output
document.writeln("Oh hey, I've fixed your name: ",
  sortUserName(), "</br>")
