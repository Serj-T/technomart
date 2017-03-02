var linkMap = document.querySelector('.about__contacts-map');
var popupMap = document.querySelector('.popup-map');
var close = document.querySelector('.btn--close-popup');
var overlay = document.querySelector('.overlay');

linkMap.addEventListener('click', function(event){
  event.preventDefault();
  console.log('click');
  popupMap.classList.add('popup-map--on');
  overlay.classList.add('overlay--on');
});

close.addEventListener('click', function(event){
  event.preventDefault();
  popupMap.classList.remove('popup-map--on');
  overlay.classList.remove('overlay--on');
});

overlay.addEventListener('click', function(event){
  event.preventDefault();
  popupMap.classList.remove('popup-map--on');
  overlay.classList.remove('overlay--on');
});
