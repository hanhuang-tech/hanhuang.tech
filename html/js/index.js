// animate logo
const habbitToggle = document.querySelector("#habbit-toggle");
habbitToggle.addEventListener("click", function () {
  document.body.classList.toggle("habbit-move");
});

const vpToggle = ["mbToggle","tbToggle","dtToggle","dthdToggle"]
mbToggle = document.querySelector("#mb-toggle");
vpToggle.addEventListener("click", function () {
  document.body.classList.toggle("toggle-mobile")});