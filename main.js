// le menu déroulant en appuyant sur le bouton Ajouter une checklist
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownMenu = document.querySelector('.dropdown-menu-content');
dropdownBtn.addEventListener("click", function () {
dropdownMenu.classList.toggle("visible");
});

// fonction pour rajouter des li à l'ul ID Ajouter une tache dans le post it 
const form = document.querySelector('#form');
const inputToDo = document.querySelector('#todoinput');
const toDoList = document.querySelector('#listeToDo');

form.onsubmit = function (event) {
event.preventDefault;

const newToDo = document.createElement("li");
newToDo.innerHTML = inputToDo.value;

toDoList.appendChild(newToDo);
inputToDo.value = "";
};

// Déclaration de Post-Its, la div qui prendra les autres posts its

const postItsgroupe = document.querySelector(".postits");

// function création du premier post-it

const createPostItNormal = () => {
const postit = document.createElement("div");
postit.classList.add("post-it");
postItsgroupe.appendChild(postit);

const formUn = document.createElement("form");




// general pour les post-its en création:
// const postit = document.createElement("div");
// postit.classList.add("post-it");



//    //si on souhaite faire une image de fond type post-it générique pour notre post it, utiliser cette ligne, sinon voir ensemble comment faire 
// //    postIt.style.backgroundImage = "url('postit.png')";
//    postits.appendChild("postIt"); 

// je clique sur le bouton ajouter une liste de taches


// le menu déroulant se déroule en roulant

// je survole le menu déroulant, cela met en surimprssion mon choix de la ligne

// je clique sur un item du menu déroulant pour génerer une création d'un module de list
// switch case 1 "module A": function creation de to do list (argument en fonction )
// appel de la function création de to do list


// ne pas oublier de rajouter une fonction "vous ne pouvez pas rajouter plus de listes" si la grid est pleine. Se limiter à 6 ou 8 listes par exemple. 
// function supprimer une liste sur clic du bouton "X"
