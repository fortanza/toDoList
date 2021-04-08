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
let todoCount = 0;

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
  checkbox.setAttribute("data-todoNum", todoCount)  ;
  checkbox.classList.add("barrerListe");
  
  checkbox.addEventListener("click", (element)=> {
      const todoIndex = element.target.dataset.todoNum;
      const selectElName =  `[data-todoIndex='${todoCount}']`;
      const texteACopier = document.querySelector(selectElName);
      console.log("click");
      if (element.target.checked == true) {    
       console.log("checked"); texteACopier.style.textDecorationLine = "line-through";
      } 
      else {       
        console.log("unchecked");       
        texteACopier.style.textDecorationLine = "none";
      }
    });
  
  divPrincipale.appendChild(checkbox);
}

function DivTexteACopier() {
  // creation Div texteCopier
  texteACopier = document.createElement("div");
  texteACopier.setAttribute('data-todoIndex', todoCount)
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
  img.setAttribute("data-todoNum1", todoCount)

  img.addEventListener("click", (element)=> {
    const todoIndex1 = element.target.dataset.todoNum1;
    const selectElNumber =  `[data-todoIndex1='${todoCount}']`;
    const texteACopier = document.querySelector(selectElNumber);
    console.log("click");
    document.querySelector('.elementCreer').remove();
  });
}

// ***********************************************************************************************
// Action du boutton
// ******************************************************************************************

myButton.addEventListener("click", (e) => {
  e.preventDefault();
  todoCount++;
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


console.log("INIT");

const tableau_de_checkbox = document.querySelectorAll('[data-todoNum]');


// checkbox.onclick = () => {
//   document.querySelector('divPrincipale').remove();
// }

console.log