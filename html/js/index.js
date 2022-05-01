// animate logo
const habbitToggle = document.querySelector("#habbit-toggle");
habbitToggle.addEventListener("click", function () {
  document.body.classList.toggle("habbit-move");
});

const vpToggle = ["mbToggle","tbToggle","dtToggle","dthdToggle"]

vpToggle[0].addEventListener("click", function () {
  document.body.classList.toggle("toggle-mobile")});

vpToggle[1].addEventListener("click", function () {
  document.body.classList.toggle("toggle-tablet")});

vpToggle[2].addEventListener("click", function () {
  document.body.classList.toggle("toggle-desktop")});

vpToggle[3].addEventListener("click", function () {
  document.body.classList.toggle("toggle-desktophd")});

