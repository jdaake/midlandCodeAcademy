var choices = document.getElementsByClassName('choice')
var gameInfo={
    game: 0,
    win: 0,
    loss: 0,
    tie: 0
}

function getAIChoice(){
    return choices[Math.floor(Math.random()* choices.length)].value;
}


function selectChoice(playerChoice){
    var aiChoice = getAIChoice();
    document.getElementById('playerDiv').innerHTML=`You selected ${playerChoice}!`;
    document.getElementById('aiDiv').innerHTML=`The computer selected ${aiChoice}!`;
    endGame(playerChoice, aiChoice);
}

function endGame(player, ai){
    var outcomes = {
        rock: {rock: 'tie', paper: 'loss', scissors: 'win'},
        paper: {rock: 'win', paper: 'tie', scissors: 'loss'},
        scissors: {rock: 'loss', paper: 'win', scissors: 'tie'}
    }
    var result = outcomes[player][ai];
    document.getElementById('next').innerText = `The Game ended with a ${result}! Select again for a new game.`
    updateBoard(result);
}

function updateBoard(result){
    gameInfo.game++;
    gameInfo[result]++;
    document.getElementById(result).innerHTML = gameInfo[result];
    document.getElementById('game').innerHTML = gameInfo.game;
}



for(var i=0; i < choices.length; i++){
        choices[i].addEventListener('click', function(e){
            selectChoice(e.target.value);
        });
}