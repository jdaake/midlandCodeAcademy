var activePlayerIsX;
var startingHTML = $("#board").html();
var movesLeft;
var gameOver = false;
var board = new Array(9);
console.log(board);
$("#button").on("click", setupBoard);

function setupBoard() {
  gameOver = false;
  $("#X").addClass("active");
  $("#O").removeClass("active");
  $("#button").toggleClass("hidden");
  $("#outcome").empty();
  movesLeft = 9;
  $("#board").html(startingHTML);
  var boxes = $(".box");
  activePlayerIsX = true;

  $(".box").each(function() {
    $(this).on("click", function() {
      var activeIcon = activePlayerIsX ? "X" : "O";
      if (board[this.id] === undefined && !gameOver) {
        board[this.id] = activePlayerIsX ? 1 : 2;
        $(this).addClass(activeIcon);
        $(this).html(activeIcon);
        activePlayerIsX = !activePlayerIsX;
        movesLeft--;
        checkWinner();
      }
    });
  });
}

function checkWinner() {
  //Check Horizontals
  for(var i =0; i <9; i+=3){
    if(board[i] && board[i] === board[i+1] && board[i] === board[i+2]){
      endGame(board[i]);
      return;
    }
  }
  //Check Verticals
  for(var i=0; i <3; i++){
    if(board[i] && board[i] === board[i+3] && board[i] === board[i+6]){
      endGame(board[i]);
      return;
    }
  }
  //Check Diagonals
  if(board[0] && board[0] === board[4] && board[0] === board[8]){
    endGame(board[0]);
    return;
  }
  
  if(board[2]  && board[2] === board[4] && board[2] === board[6]){
    endGame(board[2]);
    return;
  }
  if(movesLeft <= 0){
    endGame(0);
    return;
  }
  
  $("#X").toggleClass("active");
  $("#O").toggleClass("active");
}

function endGame(winner) {
  gameOver = true;
  $("#button").toggleClass("hidden");
  var winningSymbols = ["Tie", "X", "O"];
  if (winner === 0) {
    $("#outcome").html("It's a tie!");
  } else {
    $("#outcome").html(`${winningSymbols[winner]} wins!`);
  }
  board = new Array(9);
}

setupBoard();
