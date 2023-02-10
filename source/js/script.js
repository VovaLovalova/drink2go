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
  },
  mousewheel: true
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


//МОБИЛЬНОЕ МЕНЮ

let button = document.querySelector('.navigation__toggle');
let navBar = document.querySelector('.navigation__list');

button.classList.remove('navigation__toggle--nojs');
navBar.classList.remove('navigation__list--nojs')

function onClickNavBarButton() {
  button.classList.toggle('navigation__toggle--open');
  button.classList.toggle('navigation__toggle--close');
  navBar.classList.toggle('navigation__list--open');
  navBar.classList.toggle('navigation__list--close');
}

function onClickDocument(e) {
  if (e.target != button) {
    navBar.classList.add('navigation__list--close');
    navBar.classList.remove('navigation__list--open');
    button.classList.add('navigation__toggle--open');
    button.classList.remove('navigation__toggle--close');
  }
}

button.addEventListener("click", onClickNavBarButton);
document.addEventListener("click", onClickDocument);
