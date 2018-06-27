$(document).ready(function(){
  var size = {
    height: window.innerHeight,
    width: window.innerWidth
  }
  var gameStarted = false;
  function createDiv(func, className){
  var div = document.createElement("div");
  if(className){
    $(div).addClass(className);
  }
  $(div).css("position", "absolute").css("top", Math.floor(Math.random() * (size.height- 30)) +"px").css("left", Math.floor(Math.random() * (size.width- 30)) +"px").on("mouseenter", func);
  $("body").append(div);
  }
  
  function endWinner(){
    if(gameStarted){
      gameStarted = false;
      alert("You are a winner!");
    }
  }
  
  function endLoser(){
    if(gameStarted){
      gameStarted = false;
      alert("You are a loser!");
    }
  }
  
  function startGame(){
    gameStarted = true;
  }
  
  for (var i = 0; i<75; i++){
    createDiv(endLoser);
  }
  
  createDiv(startGame, 'start');
  createDiv(endWinner, 'end');


});
