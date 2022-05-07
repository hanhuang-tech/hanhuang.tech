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
const wipSect = document.querySelector("#wip");
const walkDiv = document.querySelector("#walkin");
const walkImg = document.querySelector("#walkimg");
const walkXh2 = document.querySelector("#walkh2");
const revealHidden = document.querySelector("#hiddenwip");
const flowersBed2 = document.querySelector("#flowersbed2");

walkImg.addEventListener("mouseenter", function () {
  wipSect.style.background = "lightslategray";
  walkXh2.style.color = "var(--clr-accent)";
  walkDiv.style.opacity = 0;
  revealHidden.style.opacity = 1;
  revealHidden.style.zIndex = "1";
  flowersBed2.style.opacity = "0";
  flowersBed2.style.zIndex = "0";
});

wipSect.addEventListener("mouseleave", function () {
  wipSect.style.background = "rgb(60, 60, 60)";
  walkXh2.style.color = "white";
  walkDiv.style.opacity = 1;
  revealHidden.style.opacity = 0;
  revealHidden.style.zIndex = "0";
  flowersBed2.style.opacity = "1";
  flowersBed2.style.zIndex = "1";
});