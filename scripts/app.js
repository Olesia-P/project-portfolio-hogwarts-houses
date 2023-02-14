
let salazar = {
 img: "salazar-img",
 caption:  "salazar-caption",
 cuteImg: "images/salazar-slytherin-anime.jpg",
 seriousImg: "images/salazar-slytherin-serious.webp",
 seriousCaption: "Serious Salazar Slytherin"
}

let rowena = {
 img: "rowena-img",
 caption:  "rowena-caption",
 cuteImg: "images/rowena-ravenclaw-anime.jpg",
 seriousImg: "images/rowena-ravenclaw-serious.webp",
 seriousCaption: "Serious Rowena Ravenclaw"
}

let helga = {
 img: "helga-img",
 caption:  "helga-caption",
 cuteImg: "images/helga-hufflepuff-anime.jpg",
 seriousImg: "images/helga-hufflepuff-serious.webp",
 seriousCaption: "Serious Helga Hufflepuff"
}


let godric = { 
 img: "godric-img",  
 caption: "godric-caption", 
 cuteImg: "images/godric-gryffindor-anime.jpg",
 seriousImg: "images/godric-gryffindor-serious.webp",
 seriousCaption: "Serious Godric Gryffindor"
}


function changeImg (status, founder) {
let specificImg = document.querySelector(`#${founder.img}`);
let caption = document.querySelector (`#${founder.caption}`);
specificImg.setAttribute ("src", `${status === 'Cute' ? founder.cuteImg : founder.seriousImg}`); 
caption.innerHTML = `${status=== 'Cute' ? 'Cute' : founder.seriousCaption }`;
let img = document.querySelector('.founder-img');
img.style.filter = `${status === "Cute" ? 'brightness(80%)' : 'brightness(100%)' }` ;
}

function changeStatus (status) {
if ( status === "Cute") { status = "Serious"} else { status = "Cute"};
return status;
}

function startChangingImgG (event) {
   event.preventDefault();
   currentStatus = changeStatus(currentStatus); 
   changeImg(currentStatus, godric);
}

function startChangingImgS (event) {
   event.preventDefault();
   currentStatus = changeStatus(currentStatus); 
   changeImg(currentStatus, salazar);
}

function startChangingImgR (event) {
   event.preventDefault();
   currentStatus = changeStatus(currentStatus); 
   changeImg(currentStatus, rowena);
}

function startChangingImgH (event) {
   event.preventDefault();
   currentStatus = changeStatus(currentStatus); 
   changeImg(currentStatus, helga);
}

let currentStatus = "Serious";

let godricLink = document.querySelector("#godric-link");
if (godricLink) {godricLink.addEventListener("click", startChangingImgG);}

let salazarLink = document.querySelector("#salazar-link");
if (salazarLink) {salazarLink.addEventListener("click", startChangingImgS);}

let rowenaLink = document.querySelector("#rowena-link");
if (rowenaLink) {rowenaLink.addEventListener("click", startChangingImgR);}

let helgaLink = document.querySelector("#helga-link");
if (helgaLink) {helgaLink.addEventListener("click", startChangingImgH);}




