// animate habbit section
const habbitToggle = document.querySelector("#habbit-toggle");

habbitToggle.addEventListener("click", function () {
    document.body.classList.toggle("habbit-move")
});

// spoiler button
const spoilBtn = [
    document.querySelector("#spoil-btn1"),
    document.querySelector("#spoil-btn2"),
    document.querySelector("#spoil-btn3"),
    document.querySelector("#spoil-btna"),
    document.querySelector("#spoil-btnb"),
    document.querySelector("#spoil-btncp1"),
    document.querySelector("#spoil-btncp2")
]
const spoilMov = [
    document.querySelector("#spoil-move1"),
    document.querySelector("#spoil-move2"),
    document.querySelector("#spoil-move3"),
    document.querySelector("#spoil-movea"),
    document.querySelector("#spoil-moveb"),
    document.querySelector("#spoil-movecp1"),
    document.querySelector("#spoil-movecp2")
]
const hideres = [
    'hide-res1',
    'hide-res2',
    'hide-res3',
    'hide-sfea',
    'hide-sfeb'
]
const revealres = [
    'reveal-res1',
    'reveal-res2',
    'reveal-res3',
    'reveal-sfea',
    'reveal-sfeb'
]

spoilBtn[0].addEventListener("click", function () {
    spoilMov[0].classList.contains(hideres[0]) ? spoilMov[0].classList.replace(hideres[0], revealres[0]) : spoilMov[0].classList.replace(revealres[0], hideres[0])
})

spoilBtn[1].addEventListener("click", function () {
    spoilMov[1].classList.contains(hideres[1]) ? spoilMov[1].classList.replace(hideres[1], revealres[1]) : spoilMov[1].classList.replace(revealres[1], hideres[1])
})

spoilBtn[2].addEventListener("click", function () {
    spoilMov[2].classList.contains(hideres[2]) ? spoilMov[2].classList.replace(hideres[2], revealres[2]) : spoilMov[2].classList.replace(revealres[2], hideres[2])
})

spoilBtn[3].addEventListener("click", function () {
    spoilMov[3].classList.contains(hideres[3]) ? spoilMov[3].classList.replace(hideres[3], revealres[3]) : spoilMov[3].classList.replace(revealres[3], hideres[3])
})

spoilBtn[4].addEventListener("click", function () {
    spoilMov[4].classList.contains(hideres[4]) ? spoilMov[4].classList.replace(hideres[4], revealres[4]) : spoilMov[4].classList.replace(revealres[4], hideres[4])
})

// codebox

const codeBox = document.body.querySelector(".codebox");

const span = "</span>";
const spanBlue = "<span class='codeblue'>"
const spanGreen = "<span class='codegreen'>"
const spanBrown = "<span class='codebrown'>"


function styleEl(codeBox) {
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("&lt;link ", `&lt;${spanBlue}link ${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("&lt;section class", `&lt;${spanBlue}section${span} ${spanGreen}class${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("/section", `/${spanBlue}section${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("&lt;button class", `&lt;${spanBlue}button${span} ${spanGreen}class${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("/button", `/${spanBlue}button${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("&lt;meta ", `&lt;${spanBlue}meta ${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("a ", `${spanBlue}a ${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("/a", `/${spanBlue}a${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("&lt;p class", `&lt${spanBlue}p${span} ${spanGreen}class${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("&lt;p&gt;", `&lt${spanBlue}p${span}&gt;`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("&lt;/p&gt;", `&lt;/${spanBlue}p${span}&gt;`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("&lt;nav class", `&lt;${spanBlue}nav${span} ${spanGreen}class${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("/nav", `/${spanBlue}nav${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("&lt;ul class", `&lt;${spanBlue}ul${span} ${spanGreen}class${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("/ul", `/${spanBlue}ul${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("&lt;li class", `&lt;${spanBlue}li${span} ${spanGreen}class${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("/li", `/${spanBlue}li${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("/div", `/${spanBlue}div${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("&lt;div class", `&lt${spanBlue}div${span} ${spanGreen}class${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll(`&lt;h1 class`, `&lt;${spanBlue}h1${span} ${spanGreen}class${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll(`&lt;h2 class`, `&lt;${spanBlue}h2${span} ${spanGreen}class${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll(`&lt;h3 class`, `&lt;${spanBlue}h3${span} ${spanGreen}class${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("/h1", `/${spanBlue}h1${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("/h2", `/${spanBlue}h2${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("/h3", `/${spanBlue}h3${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("&lt;img ", `&lt;${spanBlue}img ${span}`);

    codeBox.innerHTML = codeBox.innerHTML.replaceAll('" class=', `" ${spanGreen}class${span}=`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("id=", `${spanGreen}id${span}=`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("alt=", `${spanGreen}alt${span}=`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("rel=", `${spanGreen}rel${span}=`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("src", `${spanGreen}src${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("href", `${spanGreen}href${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("name", `${spanGreen}name${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("charset", `${spanGreen}charset${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("type", `${spanGreen}type${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("content", `${spanGreen}content${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("aria-label=", `${spanGreen}aria-label${span}=`);

    codeBox.innerHTML = codeBox.innerHTML.replaceAll("&lt;", `${spanBrown}&lt;${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("&gt;", `${spanBrown}&gt;${span}`);
}

const codeboxEl = document.getElementsByClassName("codebox");

for (var i = 0; i < codeboxEl.length; i++) {
    styleEl(codeboxEl[i])

}

