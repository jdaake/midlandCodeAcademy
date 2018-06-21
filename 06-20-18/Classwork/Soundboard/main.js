var sounds = {
  "doodily": new Audio("http://www.richmolnar.com/Sounds/Ned%20-%20Indeedily%20doodily.wav"),
  "bovine": new Audio("http://www.richmolnar.com/Sounds/Ralph%20-%20Bovine%20U.wav"),
  "okily": new Audio("http://www.richmolnar.com/Sounds/Ned%20-%20Okily%20Dokily.wav"),
  "nuts": new Audio("http://www.richmolnar.com/Sounds/Homer%20-%20You're%20all%20nuts.wav"),
  "job": new Audio("http://www.richmolnar.com/Sounds/Homer%20-%20Take%20this%20job%20and.wav"),
  "everybody": new Audio("http://www.richmolnar.com/Sounds/Dr.%20Nick%20-%20Hi%20everybody%20(1).wav"),
  "broke": new Audio("http://www.richmolnar.com/Sounds/Bart%20-%20Cool,%20I%20broke%20his%20brain.wav")
}
var buttons = document.querySelectorAll(".button");

for(var i = 0; i < buttons.length; i++){
buttons[i].addEventListener('click', function(e){
  sounds[e.target.id].play();
})
}
