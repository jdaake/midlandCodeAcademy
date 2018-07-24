$(document).ready(function() {
  //Declares global variable for later use.
  var users;
  //Sets up button clicks for showing users again
  $(".showUsers").on("click", function() {
    $("#albums, #photos").hide();
    $("#users").show();
  });

  //Sets up button clicks for showing albums again.
  $("#showAlbums").on("click", function() {
    $("#photos, #users").hide();
    $("#albums").show();
  });

  //Pulls albums using a fetch request
  function pullAlbums() {
    //Albums
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then(res => res.json())
      .then(data => {
          //AFTER Albums are loaded, passing that data as an argument
          //and pulls Photos. The Albums COULD be stored globally but 
          //Will not need to be due to future functionality
        pullPhotos(data);
      });
  }

  function pullPhotos(albums) {
    //Photos
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => res.json())
      .then(data => {
        //After loading photos JSON, that and the albums are passed to the 
        //Attach photos function. This allows for the photos to be added as part of the
        //Album Objects so we don't need to filter them each time an album button is clicked.  
        //GoTo Line 44
        var attachedAlbums = attachPhotos(data, albums);
        //Passes returned value from attachPhotos to attachAlbums GOTO line 51
        attachAlbums(attachedAlbums);
      });
  }

  //Accepts all the Photos and all the Albums
  function attachPhotos(photos, albums) {
      //Returns the albums with all photos attached from the attachTables function (See Line: 57 )
    return attachTables(albums, "photos", photos, "albumId");
  }

  //Accepts all albums and then attaches them to the appropriate user.
  function attachAlbums(albums) {  
    attachTables(users, "albums", albums, "userId");
    //After attaching the albums to their users, the populate Users function adds the user to the DOM
    populateUsers();
  }

  //This function treats the two objects as tables and makes a relational map between the two. This allows
  // us to only iterate through each one a single time. It causes more issues time wise at the front loading
  // of the page but reduces any lag for filtering later on. Overall it's a reduction in processer use.
  function attachTables(
    primaryTable,   //The element you're attaching objects to
    primaryKey,     //The key to attach objects to, i.e. you're attaching albums to the albums key on a user object
    secondaryTable, //The Object you are attaching things from, i.e. albums when you're attaching them to a user
    secondaryKey    //The key on the secondaryTable that's a reference to the primary, i.e. album.userId (userID is the key)
  ) {
    var relationalMap = {}; //This will allow us to use keys instead of trying to remember an array value. 
    for (var i in primaryTable) { //Loops through each element in the object you're attaching to.
      //For attaching albums to users this basically is users[i].albums = [], it will allow us to use .push() for an array  
      primaryTable[i][primaryKey] = []; 
      //For the relational map it's storing what the index of that user is based off their userId so for the example of
      //attaching albums to userIds it's the same as saying: relationalmap[users[i].id] = i
      // so if i is 7 and user[i] which would then be user[7]'s id =5, then relationalMap["5"] would equal 7
      // this will allow us to easily see what index user with userId 5 is in the users array.
      relationalMap[primaryTable[i].id] = i;
    }
    for (var i in secondaryTable) { //Iterates now through the array of objects we're attaching i.e. albums in the above examples
      
      //This might look confusing but it's basically just allowing us to easily pick out which index of the user array we're attaching
      // an album to. Written clearer it's: relValue = relationalMap[albums[i].userId] 
      // Lets say i is 6 so then albums[i] (albums[6]) has a user id of 5 (albums[6].userId would equal 5) 
      // and the user with an id of 5 (the one the album belongs to) was in the 7th index (users[7].id would equal 5 in that case)
      // relValue is basically saying: relationalMap[albums[6].userId] or simplified with the above information relationalMap["5"];
      // as in our above example, relationalMap["5"] was 7 so relValue would equal 7.
      var relValue = relationalMap[secondaryTable[i][secondaryKey]];
      
      //Continuing from the above example where relValue is 7 and i is 6 in this iteration of the for loop, the below could be simplified to
      // users[7].albums.push(albums[6]) this happens for every element in the secondaryTable array that was passed as an argument.
      primaryTable[relValue][primaryKey].push(secondaryTable[i]);
    }
    return primaryTable;
  }

  //Attaches all the users saved in the global variable to the DOM
  function populateUsers() {
      //clears them out
    $("#users-container").empty();
    //Appends necessary elements for each user to the DOM
    for (let i in users) {
      $(`<div class="col-4 d-flex mt-3 text-center user">
      <div class="card col-12">
      <div class="card-body d-flex flex-column  justify-content-between">
        <h5 class="card-title">${users[i].name}</h5>
        <p class="card-text">${users[i].email}</p>
        <a class="btn btn-primary view-albums btn-sm"  id=${i}>View Albums</a>
      </div>
    </div>
    </div>`).appendTo($("#users-container"));
    }

    //When someone clicks the View Albums button, it finds the user based off the id of the button
    // And then populates the albums passing the user as an argument.
    $(".view-albums").on("click", function() {
      var user = users[$(this).attr("id")];
      populateAlbums(user);
    });
  }

  function populateAlbums(user) {
    //Sets albums as the albums key for the user that was passed. Mostly just keeps from having to type user.albums each time in lieu of albums.
    var albums = user.albums;
    //Sets the username and email
    $("#album-user").html(user.name);
    $("#userEmail").html(user.email);
    $('#albums-container').empty();
    //Loops through each album
    for (var i in albums) {
        //Build then ataches elements based off the albums information see Line 155 about the getNineImages function
      $(`<div class="d-flex col-3 mt-3 text-center">
            <div class="card col-12 p-0">
                <div class="card-img-top">
                    ${getNineImages(albums[i])}
                </div>
                <div class="card-body p-2 d-flex flex-column justify-content-between">
                    <h5 class="card-title">Album ${parseInt(i)+1}</h5>    
                    <p class="card-text text-capitalize">${albums[i].title}</p>
                    <a class="btn btn-primary btn-sm view-photos"  id=${i}>View Photos</a>
                </div>
            </div>
        </div>`).appendTo($("#albums-container"));
    }
    //After attaching, it hides the users and shows the albums.
    $("#albums").show();
    $("#users").hide();

    //On click it pulls the correct album from the users array based off the album clicked
    //Even though this would happen AFTER the populate albums function is clicked, it still has access to the 
    //user variable since this functino is technically an example of a closure
    $(".view-photos").on("click", function() {
      var album = user.albums[$(this).attr("id")];
      //populate album passing the clicked album as an argument
      populatePhotos(album);
    });
  }

//Takes an album as an argument and then returns a built string of html containing x random images from the album
  function getNineImages(album) {
    var imgTags = "";
    //Finds how many images are in one fourth of the album
    var number = Math.floor(album.photos.length / 9);
    for (var i = 0; i < 9; i++) {
        //Pulls out a random image from the 1st, then 2nd, then 3rd, then 4th fourth of the photos array in the album.
      var random = Math.floor(Math.random() * number) + number * i;
      //Adds the html to the tags string
      imgTags += `<img class="card-img" src="${album.photos[random].url}">`;
    }
    return imgTags;
  }

  function populatePhotos(album) {
    var carousel = $("#albumImages");
    //clears out the carousel for reuse
    carousel.empty();
    $("#album-title").html(album.title);
    for (var i in album.photos) {
      $(`<div class="carousel-item">
            <img src="${album.photos[i].url}" alt="${album.photos[i].title}">
            <div class="carousel-caption d-none d-md-block">
                <p>${album.photos[i].title}</p>
            </div>
        </div>`).appendTo(carousel);
    }
    //Sets the first element in the carousel as the active element.
    $(".carousel-item").first().addClass("active");
    //activates the carousel using JavaScript
    $(carousel).carousel();
    //hides the albums and shows the photo carousel.
    $("#albums").hide();
    $("#photos").show();
  }

  //Gets Users to start the whole thing.
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      //Once users are loaded, it saves them in a global variable
      users = data;
      //After users are loaded, it pulls all the requisite albums (GOTO LINE 17)
      pullAlbums();
    });
});
