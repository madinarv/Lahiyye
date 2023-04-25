// Toggle mobile menu
var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('nav ul');

menuBtn.addEventListener('click', function() {
  menu.classList.toggle('show');
});

// Smooth scrolling
var scrollLinks = document.querySelectorAll('nav a');

for (var i = 0; i < scrollLinks.length; i++) {
  scrollLinks[i].addEventListener('click', function(e) {
    e.preventDefault();

    var targetId = this.getAttribute('href');
    var targetElement = document.querySelector(targetId);}
 ) }
