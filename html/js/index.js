// toggle function
function functToggle(t) {
  document.body.classList.toggle(t);
}

// animate logo
const habbitToggle = document.querySelector("#habbit-toggle");
habbitToggle.addEventListener("click", functToggle("habbit-move"));

// walk in
const walkin = document.querySelector("#stairs");
walkin.addEventListener("mouseover", function () {
  document.body.classList.toggle("walk-in");
});

walkin.addEventListener("mouseleave", function () {
  document.body.classList.toggle("walk-out");
});



