let godricImg = document.querySelector("#godric-img");
let godricLink1 = document.querySelector ("#godric-link-first");
let godricLink2 = document.querySelector ("#godric-link-second");
let godricCaption = document.querySelector ("#godric-caption");
let img = document.querySelector('.founder-img');

godricLink1.addEventListener("click", changeGodricToCute);

function changeGodricToCute () {
event.preventDefault();
img.style.filter = 'brightness(80%)';
godricImg.setAttribute ("src", `images/godric-gryffindor-anime.jpg`);  
godricCaption.innerHTML = "Cute Godric Gryffindor";
godricLink1.setAttribute ("class", `accent-color-G gryffindor-link subheading d-none`);
godricLink2.setAttribute ("class", `accent-color-G gryffindor-link subheading d-inline`);
}


godricLink2.addEventListener("click", changeGodricToSerious);

function changeGodricToSerious () {
event.preventDefault();
img.style.filter = 'brightness(100%)';
godricImg.setAttribute ("src", `images/godric-gryffindor-serious.webp`);  
godricCaption.innerHTML = "Serious Godric Gryffindor";
godricLink1.setAttribute ("class", `accent-color-G gryffindor-link subheading d-inline`);
godricLink2.setAttribute ("class", `accent-color-G gryffindor-link subheading  d-none`);
}