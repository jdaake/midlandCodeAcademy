var select = $('#breeds');
var images;
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
  getRandom();
});

function getRandom(){
  console.log('Clicked');
if($(select).val() === 'INVALID'){
  return;
}
fetch(`https://dog.ceo/api/breed/${$(select).val()}/images`)
.then(res => res.json())
.then(res=>{
  console.log(res);
  images = res.message;
  $('#picContainer').append($('<img/>', {src : images[Math.floor(Math.random()* images.length)],
    class: 'col-6 img-fluid'}))
})
}
