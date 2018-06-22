var randColor = ["yellow", "green", "blue", "red", "purple"]

window.setInterval(function(){
 function setColor(){
   return Math.floor(randColor.length * Math.random());
 }
 goingDown.style.backgroundColor = setColor();
}, 1000);
