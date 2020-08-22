// link 1
/*const hamburger = document.querySelector(".hamburger");

const links = document.querySelectorAll("#navbar li");
console.log(navLinks);
addEventListener("click", () => {
    navLinks.classList.toggle("open");
links.forEach(link =>{
    link.classList.toggle("fade");

});
});
// link 2
const hamburgers = document.querySelector(".hamburgerOne");
const navOLinks = document.querySelector(".nav-linksOne");
const linksO = document.querySelectorAll("");
nav li
hamburgers.addEventListener("click", () => {
    navOLinks.classList.toggle("open");
linksO.forEach(link =>{
    link.classList.toggle("fadeO");

});
});
// link 3
const hamburgerq = document.querySelector(".hamburgerTwo");
const navqLinks = document.querySelector(".nav-linksTwo");
const linksq = document.querySelectorAll(".nav-linksTwo");

hamburgerq.addEventListener("click", () => {
    navqLinks.classList.toggle("open");
linksq.forEach(link =>{
    link.classList.toggle("fadeq");

});
});
*/

//  quand on clique sur un li faisant partie de l element nav alors on rajoute la classe .open

// 1/ recuperer tous les li faisant partie de l element nav et les stockers dans une variable
// 2/ Creer un ecouteur devenenements qui sous certaine condition (en verifiant l id du li sur le quel on a cliquer) va rajouter la class .open au ul qui porte le meme nom de class
// example si je clique sur un li qui a lid nav-linksOne alors je add la class .open sur le ul qui a la class nav-linksOne et sur les ul qui nont pas ce nom de class on remove .open
// const links = document.querySelectorAll("#navbar li");
// const Id0 = document.querySelectorAll(".nav-links");
// const Id1 = document.querySelectorAll(".nav-linksOne");
// const Id2 = document.querySelectorAll(".nav-linksTwo");
// const class0 = document.querySelectorAll("#nav-links");
// const class1 = document.querySelectorAll("#nav-linksOne");
// const class2 = document.querySelectorAll("#nav-linksTwo");
// links.addEventListener("click", () => {
//   if (Id0 == class0) {
//     class0.classList.add("open");
//   } else if ((Id0 = !class0)) {
//     claclassList.remove("open");
//   } else
//     () => {
//       class0.classList.remove("open");
//     };
// });

///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////

const navList = document.querySelector("#nav-list");
const contentAbout = document.querySelector("#about-me");
const contentExp = document.querySelector("#experience");
const contentContact = document.querySelector("#contact");

console.log(navList.children);
console.log(Object.keys(navList.children));

const keys = Object.keys(navList.children);

keys.forEach(function (key) {
  const el = navList.children[key].children[0];

  el.addEventListener("click", function (event) {
    const clickedElementText = event.target.innerText;

    let content = null;
    if (clickedElementText === "About Me") {
      content = contentAbout;
    } else if (clickedElementText === "Experience") {
      content = contentExp;
    } else if (clickedElementText === "Contact") {
      content = contentContact;
    }
    console.log(content.classList);

    content.classList.add();
    content.classList.remove();
  });
});

// Get element

// Ajouter listenener
