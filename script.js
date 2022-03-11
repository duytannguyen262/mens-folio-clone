//sticky-navbar
window.addEventListener("scroll", function () {
  var headers = document.querySelectorAll("header");
  for (var i = 0; i < headers.length; i++) {
    headers[i].classList.toggle("sticky", window.scrollY > 180);
  }
});
