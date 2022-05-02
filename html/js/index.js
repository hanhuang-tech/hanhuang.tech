// animate logo
const habbitToggle = document.querySelector("#habbit-toggle");
habbitToggle.addEventListener("click", function () {
  document.body.classList.toggle("habbit-move");
});

const walkin = document.querySelector("#stairs");

walkin.addEventListener("mouseover", event => {
  document.body.classList.toggle("walk-in");
});
