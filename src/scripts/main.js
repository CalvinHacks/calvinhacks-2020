let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active-flex');
});






// navBarToggle.addEventListener('click', function () {
//   if (mainNav.style.display == "flex") {
//     mainNav.style.display = "none"
//   } else {
//     mainNav.style.display = "flex"
//   }
//   mainNav.classList.toggle('active');
// });
