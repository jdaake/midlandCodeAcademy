document.getElementById('submit').addEventListener("click", function (e) {
      e.preventDefault();
          var search = document.getElementById('search').value;
          var requestString = `http://www.omdbapi.com/?apikey=25a302e3&s=${search}&type=movie`;
          var year = document.getElementById('year').value;
          var response;
          if (parseInt(year) > 1900){
            requestString += "&y="+year
            }




            var xhr = new XMLHttpRequest();
            xhr.open('GET', requestString, true);
            // xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                  response = JSON.parse(xhr.response);
                    console.log("afterresponse", response.Search);
                }
            };
            xhr.send();
         })
