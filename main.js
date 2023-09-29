
//Tugba
// Fonction pour afficher la date et l'heure
function dateAndTime() {
    const currentDateAndTimeElements = document.querySelectorAll(".currentDateAndTime");

    const currentDate = new Date();
    const optionsDate = { weekday: 'long', month: 'long', day: 'numeric' };
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
const toDoForm = document.querySelector('#form');
const toDoInput = document.querySelector('#todoinput')
const toDoList = document.querySelector('#todolist');

form.onsubmit = function(event) {
event.preventDefault();
const newTodo = document.createElement("li");
newTodo.innerHTML = toDoInput.value;
toDoList.appendChild(newTodo);
toDoInput.value = "";
};

// Déclaration de Post-Its, la div qui prendra les autres posts its

const postItsgroupe = document.querySelector(".post-its");
const buttonUn = document.querySelector('.button1');
// cliquer sur le bouton ajouter une toDoList
// function création du premier post-it
buttonUn.addEventListener('click', function() {

// creer un element id dans le grand bloc des posts it
    const postit = document.createElement("div");
    postit.classList.add("post-it");
    postItsgroupe.appendChild(postit);
    console.log('.postit');
// creer une form
    const txtPostitUn = document.createElement("textarea");
    txtPostitUn.classList.add("postitxtUn");
    postit.appendChild(txtPostitUn);
    // remplir le form avec le input
    const txtInput = document.createElement("input");
    txtInput.setAttribute("type", "text");
    txtInput.setAttribute("name", "todoUn");
    txtInput.setAttribute("placeholder", "Inscrivez une tâche ici");
    txtInput.setAttribute("value", "");
    txtInput.setAttribute("id", "todoinputUn");
    txtPostitUn.appendChild(txtInput);
    // const textareaInputSubmit
    const textareaInputSubmit = document.createElement("input");
    textareaInputSubmit.setAttribute("type", "submit");
    textareaInputSubmit.setAttribute("value", "send");
    txtPostitUn.appendChild(textareaInputSubmit);
    // creer un tableau d'ul pour y mettre les li d'après
    const taskListUn = document.createElement('ul');
    postit.appendChild(taskListUn);
// fin de la fonction de création

// ensuite pour chaque
// prendre la valeur de l'input 
// le transformer en value pour l'incorporer au tableau déjà existant
// remettre à zero la valeur à chaque saisie
// 
});


