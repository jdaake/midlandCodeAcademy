$(function() {
  var suitsUS = ["diams", "hearts", "clubs", "spades"];
  var ranksUS = ["a","2","3","4","5","6","7","8","9","10","j","q","k"];
  var deck;
  var players = {playerOne: [], playerTwo: []};
  $("#startGame").on("click", startGame);
  $("#playerOneDiscard, #playerTwoDiscard").on("click", function() {
    var player = $(this).attr("id").split("Discard")[0]
    redraw(player);
  });

  function buildDeck(suits, ranks, shuffled = false) {
    var deck = [];
    for (var i in suits) {
      for (var j in ranks) {
        deck.push(`${ranks[j]}of${suits[i]}`);
      }
    }
    return shuffled ? shuffle(deck) : deck;
  }

  //Fisher Yates Shuffle
  function shuffle(arr) {
    var currIdx = arr.length,
      tempVal,
      rdmIdx;
    while (0 !== currIdx) {
      rdmIdx = Math.floor(Math.random() * currIdx);
      currIdx -= 1;
      tempVal = arr[currIdx];
      arr[currIdx] = arr[rdmIdx];
      arr[rdmIdx] = tempVal;
    }
    return arr;
  }

  function dealCard(playerName) {
        var card = deck.shift()
        players[playerName].push(card);
        renderCard(card, $(`#${playerName}`));
  }

  function deal(startNumCards = 5) {
    for (var i = 1; i <= startNumCards; i++) {
      dealCard("playerOne");
      dealCard("playerTwo");
    }
  }

  function renderCard(card, div) {
    var rank = card.split("of")[0];
    var suit = card.split("of")[1];
    $(`<div class="playing-card ${suit} rank-${rank}" id="${card}">
        <span class="rank">${rank.toUpperCase()}</span>
        <span class="suit">&${suit};</span>
    </div>;`)
      .on("click", function() { $(this).toggleClass("active"); })
      .appendTo(div);
  }

  function redraw(playerName){
    var discardedCards = $(`#${playerName} .active`);
    
    for(var i=0; i< discardedCards.length; i++) {
        var playIdx = players[playerName].indexOf($(discardedCards[i]).attr("id"))
        players[playerName].splice(playIdx, 1)
         $(discardedCards[i]).remove();
         dealCard(playerName)
    }

    $(`#${playerName}Instructions`).addClass("d-none");
    if(playerName == "playerOne"){
        $("#playerTwoInstructions").removeClass('d-none');
    }
    else{
        $("#playAgain").removeClass('d-none');
    }
  }

  function startGame() {
    players = {playerOne: [], playerTwo: []};
    $("#playerTwo, #playerOne").empty();
    $("#playerOneInstructions").removeClass("d-none");
    $("#playerTwoInstructions, #playAgain").addClass("d-none");
    deck = buildDeck(suitsUS, ranksUS, true);
    deal();
  }

  startGame();
});
