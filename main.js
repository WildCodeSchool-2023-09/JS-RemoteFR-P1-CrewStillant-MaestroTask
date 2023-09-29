
//Tugba
// Fonction pour afficher la date et l'heure
function dateAndTime() {
    const currentDateAndTimeElements = document.querySelectorAll(".currentDateAndTime");

    const currentDate = new Date();
    const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const optionsTime = { hour: '2-digit', minute: '2-digit' }; 

    const formattedDate = currentDate.toLocaleDateString('fr-FR', optionsDate);
    const formattedTime = currentDate.toLocaleTimeString('fr-FR', optionsTime);

    currentDateAndTimeElements.forEach(element => {
        element.textContent = `${formattedDate} ${formattedTime}`;
    });
}

// Appeler la fonction d'affichage de la date et de l'heure
dateAndTime();

// Mettre à jour la date et l'heure régulièrement
setInterval(dateAndTime, 1000);


//QUENTIN
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
event.preventDefault();

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
}
//créer une zone de textarea
//sur survol, afficher "vous pouvez cliquer ici pour rajouter une tache"
//sur click, prendre le texte saisi comme value et le renvoyer dans une li rattaché un ul sur le div du post-it 
// ce ul ne s'affiche que si il à au moins une valeur (donc .visible à utliser avec un if true else)
// a la fin de la variable créer une const Listecrée = true
// et se rapporter au début du code de la fonction pour mettre un if true afficher message "plus de place pour cette liste ;)"
// else lancer le reste


