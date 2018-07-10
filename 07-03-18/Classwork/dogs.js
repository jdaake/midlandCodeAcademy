var select = $('#breeds');
var selectedBreed;
fetch('https://dog.ceo/api/breeds/list/all')
.then(function(res){
  return res.json()
})
.then(function(res){
  $(select).empty();
  $.each(res.message, function(key, val){
    if(val.length >0){
      var optGroup = $('<optgroup/>', {label: key.toUpperCase()})

      $.each(val, function(subKey, subVal){
        $(optGroup).append($('<option/>', {value: key+'/'+subVal}).html(subVal.charAt(0).toUpperCase() + subVal.slice(1)));
      })
      $(select).append(optGroup);
    }
    else{
      $(select).append($('<option/>', {value: key}).html(key.charAt(0).toUpperCase() + key.slice(1)));
    }
  })
})

$('#getRandom').on('click', function(){
  if($(select).val() === 'INVALID' || selectedBreed === $(select).val()){
    return;
  }
  selectedBreed = $(select).val();
  getRandom();
});

function getRandom(){

fetch(`https://dog.ceo/api/breed/${$(select).val()}/images`)
.then(res => res.json())
.then(res=>{
  var innerCarousel = $('#innerCarousel')
  var images = get20(res.message);
  $(innerCarousel).empty();
  $($('.d-none')[0]).removeClass('d-none');
  $(images).each(function(idx, val){
if(val){
    $(innerCarousel)
    .append($('<div/>', {class: 'carousel-item'})
    .append($('<img/>', {src : images[idx], class: 'd-block text-center img-fluid'})))
  }
  });
  $('.carousel-item').first().addClass('active');
  $(innerCarousel).carousel();
})
}

function get20(array){
  var number = Math.floor(array.length/20);
  var tempImages = [];
  for(var i = 0; i < 20; i++){
    tempImages.push(array[(Math.floor(Math.random() * number))+(number*i)])
  }
  return tempImages;
}




// <div class="carousel-item">
//   <img class="d-block w-100" src="...">
// </div>
