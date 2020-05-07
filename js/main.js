let hamburger = document.getElementById("hamburger");
let mobileMenu = document.querySelector("nav");
hamburger.onclick = function myFunction() {
  hamburger.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
};

let scrollToTopButton = document.getElementById("scrollToTop");
scrollToTopButton.onclick = function scroll() {
  document.documentElement.scrollTop = 0; // scroll is defined on html element
}