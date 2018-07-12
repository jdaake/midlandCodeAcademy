var activePlayerIsX;
var startingHTML = $('#board').html();
var movesLeft;
var gameOver = false;
var startingBoard =
{row1: {col1: 0, col2: 0,col3: 0},row2: {col1: 0,col2: 0,col3: 0},row3: {col1: 0,col2: 0,col3: 0}};
var board = JSON.parse(JSON.stringify(startingBoard))
$('#button').on('click', setupBoard);

function setupBoard(){
  gameOver = false;
  $('#X').addClass('active');
  $('#O').removeClass('active');
  $('#button').toggleClass('hidden');
  $('#outcome').empty();
movesLeft = 9;
$('#board').html(startingHTML);
var boxes = $('.box');
activePlayerIsX = true;

$('.box').each(function(){
  $(this).on('click', function(e){
    var activeIcon = activePlayerIsX ? 'X' : 'O'
    if(board[e.target.id][$(e.target).attr('value')] == 0 && !gameOver){
    board[e.target.id][$(e.target).attr('value')] = activePlayerIsX ? 1 : 2
    $(e.target).addClass(activeIcon);
    $(e.target).html(activeIcon)
    activePlayerIsX = !activePlayerIsX;
    movesLeft--;
    checkWinner();
    }
  })
})
}

function checkWinner(){
  // check horizontals
  if(board.row1.col1 !== 0 && board.row1.col1 === board.row1.col2 && board.row1.col1 === board.row1.col3){
    return endGame(board.row1.col1)
  }
  if(board.row2.col1 !== 0 && board.row2.col1 === board.row2.col2 && board.row2.col1 === board.row2.col3){
    return endGame(board.row2.col1)
  }
  if(board.row3.col1 !== 0 && board.row3.col1 === board.row3.col2 && board.row3.col1 === board.row3.col3){
    return endGame(board.row3.col1)
  }
  //check verticals

  if(board.row1.col1 !== 0 && board.row1.col1 === board.row2.col1 && board.row1.col1 === board.row3.col1){
    return endGame(board.row1.col1)
  }
  else if(board.row1.col2 !== 0 && board.row1.col2 === board.row2.col2 && board.row1.col2 === board.row3.col2){
    return endGame(board.row1.col2)
  }
  else if(board.row1.col3 !== 0 && board.row1.col3 === board.row2.col3 && board.row1.col3 === board.row3.col3){
    return endGame(board.row1.col3)
  }
  else if(board.row1.col1 !== 0 && board.row1.col1 === board.row2.col2 && board.row1.col1 === board.row3.col3){
    endGame(board.row1.col1)
    return;
  }
  else if(board.row1.col3 !== 0 && board.row1.col3 === board.row2.col2 && board.row1.col3 === board.row3.col1){
    endGame(board.row1.col3)
    return;
  }
  else if(movesLeft == 0){
    endGame(0);
    return;
  }
  $('#X').toggleClass('active');
  $('#O').toggleClass('active');
}

function endGame(winner){
  gameOver = true;
  $('#button').toggleClass('hidden');
  var winningSymbols =['Tie', 'X', 'O']
  if(winner === 0){
    $('#outcome').html("It's a tie!")
  }
  else{
  $('#outcome').html(`${winningSymbols[winner]} wins!`)
  }
  board = JSON.parse(JSON.stringify(startingBoard))
}

setupBoard();
