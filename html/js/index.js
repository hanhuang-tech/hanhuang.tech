// function
function functToggle(t) {
  document.body.classList.toggle(t);
}

// animate logo
const habbitToggle = document.querySelector("#habbit-toggle");
habbitToggle.addEventListener("click", function () {
  functToggle("habbit-move");
});

// walk in
const stairs = document.querySelector("#walkin");
const walkh1 = document.querySelector("#walkh1");
const walkh3 = document.querySelector("#walkh3");
stairs.addEventListener("mouseenter", function () {
  stairs.style.opacity = 0;
  walkh1.style.opacity = 0;
  walkh3.style.opacity = 0;
});
const wipDiv = document.querySelector("#wip");
wipDiv.addEventListener("mouseleave", function () {
  stairs.style.opacity = 1;
  walkh1.style.opacity = 1;
  walkh3.style.opacity = 1;
});