$('#submit').on("click", function(e){
  e.preventDefault();
  var search = $("#search").val();
  var requestString = `http://www.omdbapi.com/?apikey=25a302e3&s=${search}&type=movie`;
  var year = $("#year").val();
  if(parseInt(year) > 1900){
    requestString += `&y=${year}`;
  }

  fetch(requestString)
  .then(function(res){
    return res.json()
  })
  .then(function(res){
    $("#movies").empty();
    console.log(res);
    if(res.Search){
      $.each(res.Search, function(id, val){
        var li = `<li>
          <div class="poster-wrap">
            <a href="http://www.imdb.com/title/${val.imdbID}" target="blank">
              <i class="material-icons poster-placeholder">crop_original</i>
            </a>
          </div>
          <span class="movie-title">${val.Title}</span>
          <span class="movie-year">${val.Year}</span>
        </li>`
        $("#movies").append(li);
      })
    }
    else{
      $("#movies").html("No movies Found");
    }
  })
});
