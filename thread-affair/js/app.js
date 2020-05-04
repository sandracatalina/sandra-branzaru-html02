var burger = document.querySelector('.user-controls .fa-bars');
var body = document.body;

burger.addEventListener('click', function() {
  body.classList.toggle('menu-open');
});
