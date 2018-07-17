$(document).ready(function() {
  var image = $("#image");

  var imageSource = $("#imageSource");
  var width = $(".width");
  var height = $("#height");
  var filter = $("#filter");
  var filterValue = $("#filterValue");

  $("#go").click(function(){
    updatePicture();
  });

  $("#save").click(function(){
    savePicture();
  });

  updatePicture();

  function updatePicture(){
    if(!imageSource.val()) return;

    image.attr('src', imageSource.val());

    image.width(width.val() + 'px');
    image.height(height.val() + 'px');

    var units;
    switch(filter.val()) {
      case 'hue-rotate':
        units = 'deg';
        break;

      case 'blur':
        units = 'px';
        break;

      default:
        units = '%';
        break;
    }

    var filterNewValue = filter.val() + "(" + filterValue.val() + units + ")";
    image.css('filter', filterNewValue);
  }


  function savePicture(){
    var imageDOM = document.getElementById('image');

    domtoimage.toPng(imageDOM)
      .then(function (dataUrl) {
          var img = new Image();
          img.src = dataUrl;
          document.body.appendChild(img);
      })
      .catch(function (error) {
          console.error('oops, something went wrong!', error);
      });
  }

});
