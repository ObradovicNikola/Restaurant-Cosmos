let hamburger = document.getElementById("hamburger");
let mobileMenu = document.querySelector("nav");
hamburger.onclick = function myFunction() {
  hamburger.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
};
