// ***********************************************************************************************
// Variable globale
// ******************************************************************************************
let list = document.querySelector(".list");
let valeur = list.value;
let myButton = document.querySelector(".myButton");
let divPrincipale;
let checkbox;
let texteACopier;
let divImg;
let img;
let img1 = document.querySelector(".fermerImage");

// ***********************************************************************************************
// Fonction récupération des éléments
// ******************************************************************************************

function DivConteneur() {
  // Div principale
  divPrincipale = document.createElement("div");
  divPrincipale.classList.add("elementCreer");
  document.querySelector(".container").append(divPrincipale);
  // importation dans la DIV Principale
}

function CreerCheckBox() {
  // Création checkbox
  checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = false;
  checkbox.value = "1"; // ce que tu veux peut être l'ID de ta note par exemple
  checkbox.id = "myCheckbox";
  checkbox.onclick = "myCheckbox";
  checkbox.classList.add("barrerListe");
  divPrincipale.appendChild(checkbox);
}

function DivTexteACopier() {
  // creation Div texteCopier
  texteACopier = document.createElement("div");
  texteACopier.classList.add("texteCopier");
  divPrincipale.appendChild(texteACopier);
}

function DivPicture() {
  // Creation Div Img
  divImg = document.createElement("div");
  divImg.classList.add("image");
  divPrincipale.appendChild(divImg);
}

function Creationimg() {
  // Création Img
  img = document.createElement("img");
  img.src = "ressources/fermer.svg";
  img.classList.add("fermerImage");
  divImg.appendChild(img);
}

// ***********************************************************************************************
// Action du boutton
// ******************************************************************************************

myButton.addEventListener("click", (e) => {
  e.preventDefault();
  DivConteneur();
  CreerCheckBox();
  DivTexteACopier();
  DivPicture();
  Creationimg();
  copierLeTexte();
  console.log("salut!");
});

// ***********************************************************************************************
// Fonction execution
// ******************************************************************************************

// fonction copier les textes
function copierLeTexte() {
  texteACopier.textContent = list.value;
  list.value = "";
}

const tableau_de_checkbox = document.querySelectorAll('[data-todoNum]');
checkbox.setAttribute("data-todoNum", i);
textACopier.setAttribute("data-todoIndex", i);
tableau_de_checkbox.forEach( (el) => {
  el.addeventListener("click", function(element) {
      const todoIndex = element.target.dataset.todoNum;
      const selectElName =  `"[data-todoIndex='${totIndex}']"`;
      const texteACopier = document.querySelector('.texteACopier');
      if (element.target.checked == true) {    
        texteACopier.style.textDecorationLine = "line-through";
      } else {
        texteACopier.style.textDecorationLine = "none";
      }
    });
    
  });

// checkbox.onclick = () => {
//   document.querySelector('divPrincipale').remove();
// }