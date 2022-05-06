// function
function functToggle(t) {
  document.body.classList.toggle(t);
}

// animate logo
const habbitToggle = document.querySelector("#habbit-toggle");
habbitToggle.addEventListener("click", function () {
  functToggle("habbit-move");
});

// wip mouse enter
const walkImg = document.querySelector("#walkimg");
const walkDiv = document.querySelector("#walkin");
const revealHidden = document.querySelector("#hiddenwip");
walkImg.addEventListener("mouseenter", function () {
  walkDiv.style.opacity = 0;
  revealHidden.style.opacity = 1;
  revealHidden.style.zIndex = "1";
});

// wip mouse leave
const wipSect = document.querySelector("#wip");
wipSect.addEventListener("mouseleave", function () {
  walkDiv.style.opacity = 1;
  revealHidden.style.opacity = 0;
  revealHidden.style.zIndex = "0";
});