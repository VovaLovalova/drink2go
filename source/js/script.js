/* в этот файл добавляет скрипты*/
// ПРОМО БЛОК SwiperJs

var swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

// КАРТА Leaflet

const map = L.map('map').setView([59.96842348128831, 30.317638180568846], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '..//img/map-pin.svg',
  iconSize: [38, 52],
  iconAnchor: [19, 50],
});

const mainPinMarker = L.marker(
  {
    lat: 59.96842348128831,
    lng: 30.317638180568846,
  },
  {
    draggable: false,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);
