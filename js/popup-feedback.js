var link = document.querySelector('.btn--about-contact');
var popupFeedback = document.querySelector('.popup-feedback');
var close = popupFeedback.querySelector('.btn--close-popup');
var overlay = document.querySelector('.overlay');

link.addEventListener('click', function(event){
  event.preventDefault();
  popupFeedback.classList.add('popup-feedback--on');
  overlay.classList.add('overlay--on');
});

close.addEventListener('click', function(event){
  event.preventDefault();
  popupFeedback.classList.remove('popup-feedback--on');
  overlay.classList.remove('overlay--on');
});

overlay.addEventListener('click', function(event){
  event.preventDefault();
  popupFeedback.classList.remove('popup-feedback--on');
  overlay.classList.remove('overlay--on');
});
