
let godric = { img: "godric-img", 
 firstLink: "godric-link-first", 
 seondLink: "godric-link-second", 
 caption: "godric-caption", 
 cuteImg: "images/godric-gryffindor-anime.jpg",
 seriousImg: "images/godric-gryffindor-serious.webp",
 classAbsent: "accent-color-G gryffindor-link subheading d-none",
 classPresent: "accent-color-G gryffindor-link subheading d-inline",
 seriousCaption: "Serious Godric Gryffindor"
}

let salazar = {
 img: "salazar-img",
 firstLink: "salazar-link-first",
 seondLink:  "salazar-link-second",
 caption:  "salazar-caption",
 cuteImg: "images/salazar-slytherin-anime.jpg",
 seriousImg: "images/salazar-slytherin-serious.webp",
 classAbsent: "accent-color-S slytherin-link subheading d-none",
 classPresent: "accent-color-S slytherin-link subheading",
 seriousCaption: "Serious Salazar Slytherin"
}

let rowena = {
 img: "rowena-img",
 firstLink: "rowena-link-first",
 seondLink:  "rowena-link-second",
 caption:  "rowena-caption",
 cuteImg: "images/rowena-ravenclaw-anime.jpg",
 seriousImg: "images/rowena-ravenclaw-serious.webp",
 classAbsent: "accent-color-R ravenclaw-link subheading d-none",
 classPresent: "accent-color-R ravenclaw-link subheading",
 seriousCaption: "Serious Rowena Ravenclaw"
}

let helga = {
 img: "helga-img",
 firstLink: "helga-link-first",
 seondLink:  "helga-link-second",
 caption:  "helga-caption",
 cuteImg: "images/helga-hufflepuff-anime.jpg",
 seriousImg: "images/helga-hufflepuff-serious.webp",
 classAbsent: "accent-color-H hufflepuff-link subheading d-none",
 classPresent: "accent-color-H hufflepuff-link subheading ",
 seriousCaption: "Serious Helga Hufflepuff"
}

function showCute (founder) {
let specificImg = document.querySelector(`#${founder.img}`);
let link1 = document.querySelector (`#${founder.firstLink}`);
let link2 = document.querySelector (`#${founder.seondLink}`);
let caption = document.querySelector (`#${founder.caption}`);
specificImg.setAttribute ("src", `${founder.cuteImg}`); 
caption.innerHTML = "Cute";
link1.setAttribute ("class", `${founder.classAbsent}`);
link2.setAttribute ("class", `${founder.classPresent}`);

let img = document.querySelector('.founder-img');
img.style.filter = 'brightness(80%)';
}

function showSerious (founder) {
let specificImg = document.querySelector(`#${founder.img}`);
let link1 = document.querySelector (`#${founder.firstLink}`);
let link2 = document.querySelector (`#${founder.seondLink}`);
let caption = document.querySelector (`#${founder.caption}`);
specificImg.setAttribute ("src", `${founder.seriousImg}`); 
caption.innerHTML = `${founder.seriousCaption}`;
link1.setAttribute ("class", `${founder.classPresent}`);
link2.setAttribute ("class", `${founder.classAbsent}`);

let img = document.querySelector('.founder-img');
img.style.filter = 'brightness(100%)';
}


function changeToCuteG (event) {
event.preventDefault();
showCute(godric);
}
function changeToSeriousG (event) {
event.preventDefault();
showSerious(godric);
}


function changeToCuteS (event) {
event.preventDefault();
showCute(salazar);
}
function changeToSeriousS (event) {
event.preventDefault();
showSerious(salazar);
}


function changeToCuteR (event) {
event.preventDefault();
showCute(rowena);
}
function changeToSeriousR (event) {
event.preventDefault();
showSerious(rowena);
}


function changeToCuteH (event) {
event.preventDefault();
showCute(helga);
}
function changeToSeriousH (event) {
event.preventDefault();
showSerious(helga);
}


document.querySelector("#godric-link-first").addEventListener("click", changeToCuteG);
document.querySelector("#godric-link-second").addEventListener("click", changeToSeriousG);

document.querySelector("#salazar-link-first").addEventListener("click", changeToCuteS);
document.querySelector("#salazar-link-second").addEventListener("click", changeToSeriousS);

document.querySelector("#rowena-link-first").addEventListener("click", changeToCuteR);
document.querySelector("#rowena-link-second").addEventListener("click", changeToSeriousR);

document.querySelector("#helga-link-first").addEventListener("click", changeToCuteH);
document.querySelector("#helga-link-second").addEventListener("click", changeToSeriousH);
