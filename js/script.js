function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 41.8349, lng: -87.6270 },
    zoom: 15,
  });

  const marker = new google.maps.Marker({
    position: { lat: 41.8349, lng: -87.6270 },
    map: map,
    title: 'Illinois Institute of Technology',
  });

  const infoWindow = new google.maps.InfoWindow({
    content: 'Illinois Institute of Technology',
  });

  google.maps.event.addListener(marker, 'click', function () {
    infoWindow.open(map, marker);
  });
}

$(document).ready(function () {
  var imageWidth = $('#slider-container').width(); 

  $('#image-slider img').width(imageWidth); 

  $('#image-slider').width(imageWidth * $('#image-slider img').length);

  function moveSliderLeft() {
    $('#image-slider').animate({
      marginLeft: -imageWidth
    }, 500, function () {
      $('#image-slider img:first-child').appendTo('#image-slider');
      $('#image-slider').css('margin-left', 0);
    });
  }

  function moveSliderRight() {
    $('#image-slider img:last-child').prependTo('#image-slider');
    $('#image-slider').css('margin-left', -imageWidth);
    $('#image-slider').animate({
      marginLeft: 0
    }, 500);
  }

  $('#arrow-left').click(moveSliderLeft);
  $('#arrow-right').click(moveSliderRight);
});

