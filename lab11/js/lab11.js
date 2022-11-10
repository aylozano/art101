
 // * Author:    Andrik Lozano
 // * Created:   10/31/2022
 // * (c) Copyright by potatoe corp.

$('#challenge').append('<button id="buttonChalEl"> click me daddy. </button>')

$('#problem').append('<button id="buttonProbEl"> No, allow me sir being click by you, distingishble gentlement. </button>')

$('#result').append('<button id="buttonResEl"> NOOOO!! click ME daddy. </button>')


$('#buttonChalEl').click( function(){
  $('#challenge').toggleClass("special");
});

$('#buttonProbEl').click( function(){
  $('#problem').toggleClass("triplediple-special");
});

$('#buttonResEl').click( function(){
  $('#result').toggleClass("double-special");
});
