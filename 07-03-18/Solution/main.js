(function() {
  var canSelect = false;
  var selected;
  var matchPairs;
  var totalMatches = 0;
  var timeInterval;
  var timeTaken =0;
  $("#submit").on("click", function(e) {
    e.preventDefault();
    generatePairs(parseInt($("#numMatches").val()));
  });

  function generatePairs(numPairs) {
    var options = [
      "https://totatema.files.wordpress.com/2012/06/feeling_grizzly-1600x1200.jpg",
      "https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/A-G/giant-panda-eating.ngsversion.1411231575277.adapt.1900.1.jpg",
      "http://www.animalspot.net/wp-content/uploads/2015/12/Spectacled-Bear.jpg",
      "https://haydensanimalfacts.files.wordpress.com/2015/11/asiatic-black-bear.jpg",
      "https://s.abcnews.com/images/US/black-bear-encounter-ap-jrl-180322_hpMain_4x3_992.jpg",
      "https://i.imgur.com/Ozw5YdB.png",
      "https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/Q-Z/sun-bear-tongue.adapt.945.1.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg/220px-Polar_Bear_-_Alaska_%28cropped%29.jpg",
      "https://www.wired.com/images_blogs/wiredscience/2011/07/polarbear7.jpg",
      "https://static.boredpanda.com/blog/wp-content/uploads/2016/09/mother-bear-cubs-animal-parenting-21-57e3a2161d7f7__880.jpg"
    ];

    matchPairs = options.slice(0, numPairs).concat(options.slice(0, numPairs));
    buildBoard(shuffle(matchPairs));
  }

  function buildBoard(matches) {
    $("#startGame").toggleClass("hidden");
    $("#board")
      .toggleClass("hidden")
      .empty();

    $.each(matches, function(idx, val) {
      var choice = $("<div/>", { class: "flip-container choice", id: idx });
      $(choice).append(`<div class="flipper">
                            <div class="front">
                            </div>
                            <img class='back bearImage' src="">
                        </div>`);

      $(choice).on("click", function(e) {
          e.stopPropagation();
        var parent = $(e.target).hasClass('flip-container') ? e.target : $(e.target).closest('.flip-container')[0];
        if (canSelect && parent !== selected) {
          checkMatch(parent);
        }
      });
      $("#board").append(choice);
    });
    startTimer()
    canSelect = true;
  }

  function checkMatch(element) {
    $(element).toggleClass("matching");
    $(element).find('.bearImage').attr('src', matchPairs[element.id]);
    if (selected) {
        clearSelected([selected, element], (matchPairs[element.id] === matchPairs[selected.id]));
      }
     else {
      selected = element;
    }
  }

  function clearSelected(selections, matched) {
    canSelect = false;
    window.setTimeout(function() {
      $.each(selections, function(idx, val) {
        $(val).toggleClass("matching");
        if (matched) {
          $(val).toggleClass("matched");
          totalMatches++;
        }
      });
      canSelect = true;
      selected = null;
      if (totalMatches >= matchPairs.length) {
        endGame();
      }
    }, 500);
  }

  function endGame() {
    $("#startGame").toggleClass("hidden");
    $("#board").toggleClass("hidden").empty();
    alert(`You Won! It only took you ${timeTaken/10} seconds!`);
    totalMatches = 0;
    canSelect = false;
    timeTaken = 0;
    window.clearInterval(timeInterval);
  }

  function startTimer(){
      timeInterval = window.setInterval(function(){
        timeTaken += 1;
      }, 100);
  }

  //   SHUFFLE FUNCTION
  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }
})();
