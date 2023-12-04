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

    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
  