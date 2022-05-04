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
const walkIn = document.querySelector("#walkin");
const revealHidden = document.querySelector("#hiddenwip");
walkIn.addEventListener("mouseenter", function () {
  walkIn.style.opacity = 0;
  revealHidden.style.opacity = 1;
  revealHidden.style.zIndex = "1";
});
const wipSect = document.querySelector("#wip");
wipSect.addEventListener("mouseleave", function () {
  walkIn.style.opacity = 1;
  revealHidden.style.opacity = 0;
  revealHidden.style.zIndex = "0";
});