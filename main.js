//Tugba
// Fonction pour afficher la date et l'heure
function dateAndTime() {
    const currentDateElement = document.querySelector(".currentDate");
    const currentTimeElement = document.querySelector(".currentTime");

    const currentDate = new Date();
    const optionsDate = { weekday: 'long', month: 'long', day: 'numeric' };
    const optionsTime = { hour: '2-digit', minute: '2-digit'}; 

    const formattedDate = currentDate.toLocaleDateString('fr-FR', optionsDate);
    const formattedTime = currentDate.toLocaleTimeString('fr-FR', optionsTime);

    currentDateElement.textContent = formattedDate;
    currentTimeElement.textContent = formattedTime;
}

// Appeler la fonction d'affichage de la date et de l'heure
dateAndTime();

// Mettre à jour la date et l'heure régulièrement
setInterval(dateAndTime, 1000);

<<<<<<< HEAD
=======

// Le clic pour les emojis
const emojis = document.querySelectorAll('.mood img');

// Gestionnaire d'événement de clic pour chaque emoji
emojis.forEach(emoji => {
    emoji.addEventListener('click', () => {
        // Réinitialiser tous les emojis en gris
        emojis.forEach(e => e.classList.add('grayed'));

        // Retirer l'effet gris de l'emoji cliqué
        emoji.classList.remove('grayed');
    });
});



>>>>>>> a0067e77245a356730937b4819b3dadc1febb0c7
//QUENTIN
// le menu déroulant en appuyant sur le bouton Ajouter une checklist
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownMenu = document.querySelector('.dropdown-menu-content');
dropdownBtn.addEventListener("click", function () {
dropdownMenu.classList.toggle("visible");
});

// fonction PopUp

// function popUp(){
//     const popup = document.createElement('div');
//     popup.classList.add("popup");
//     popup.setAttribute("id", "test");
//     const cancel = document.createElement('div');
//     cancel.classList.add("cancel");
//     cancel.innerHTML = 'close';
//     cancel.onclick = function (e) { popup.parentNode.removeChild(popup) };
//     const message = document.createElement('span');
//     message.innerHTML = "Cette liste est déjà affichée sur votre page";
//     popup.appendChild(message);                                    
//     popup.appendChild(cancel);
//     document.body.appendChild(popup);

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

<<<<<<< HEAD
//fonction post It numéro UN
=======
>>>>>>> a0067e77245a356730937b4819b3dadc1febb0c7
buttonUn.addEventListener('click', function() {
// creer un element id dans le grand bloc des posts it
    const postitOne = document.createElement("div");
    postitOne.classList.add("post-it");
    postItsgroupe.appendChild(postitOne);
    console.log('.postit');

     // creer un tableau d'ul pour y mettre les li d'après
     const taskListOne = document.createElement('ul');
     taskListOne.classList.add("tasklistOne")
     postitOne.appendChild(taskListOne);
    // fin de la fonction de création
    //test pour voir si je peux remplir ou afficher mes li dans ul
     const listeLiOne = document.createElement('li');
     listeLiOne.innerHTML = "tuez moi rien n'a de sens";
     taskListOne.appendChild(listeLiOne); 

//je tente de creer une form pour voir si ça passe 

    const postitFormOne = document.createElement("form");
    postitFormOne.setAttribute("id", "formOne");
    postitOne.appendChild(postitFormOne);
// je lui donne un input avec setattribute et un input de validation
    const inputFormOne = document.createElement("input");
    inputFormOne.setAttribute("type", "text");
    inputFormOne.setAttribute("name", "todo");
    inputFormOne.setAttribute("placeholder", "tuez moi svp");
    inputFormOne.setAttribute("value", "");
    inputFormOne.setAttribute("id", "todoinputOne");
    postitFormOne.appendChild(inputFormOne);
    const submitform = document.createElement("input");
    submitform.setAttribute("type", "submit");
    submitform.setAttribute("value", "send");
    postitOne.appendChild("submitform");    

// creer une textarea

// const txtPostitUn = document.createElement("textarea");
    // txtPostitUn.classList.add("postitTxtUn");
    // // remplir le form
    // txtPostitUn.setAttribute("type", "text");
    // txtPostitUn.setAttribute("name", "todoUn");
    // txtPostitUn.setAttribute("placeholder", "Inscrivez une tâche ici");
    // txtPostitUn.setAttribute("value", "");
    // txtPostitUn.setAttribute("id", "todoinputUn");
    // postitOne.appendChild(txtPostitUn);
    // // creation button submit en dessous de textarea
    // const textareaInputSubmit = document.createElement("input");
    // textareaInputSubmit.setAttribute("type", "submit");
    // textareaInputSubmit.setAttribute("value", "send");
    // postitOne.appendChild(textareaInputSubmit);
   
});

<<<<<<< HEAD

// je rajoute donc la possibilité de prendre la valeur de submit et l'envoyer en li
=======
const createPostItNormal = () => {
const postit = document.createElement("div");
postit.classList.add("post-it");
postItsgroupe.appendChild(postit);
}
>>>>>>> a0067e77245a356730937b4819b3dadc1febb0c7

const toDoPostOne= document.querySelector('#formOne');
const toDoInputLiOne = document.querySelector('#todoinputOne')
const toDoListOne = document.querySelector('.tasklistOne');
FormOne.onsubmit = function(event) {
event.preventDefault();
const newTodoListUn = document.createElement("li");
newTodoListUn.innerHTML = toDoInputLiOne.value;
toDoListOne.appendChild(newTodoListUn);
toDoInputLiOne.value = "";
};


<<<<<<< HEAD
//pensez à incorporer une verification sur début de création
//si on a déjà une liste créée, on envoie un texte a l'utilisateur
//pour ça il faut créer une cosnt = true en fin de création et la faire verifier en début de



// // fonction création post-it tache urgente et title supprimé
// const urgentTaskPostIt = () => {
// const titleH1 = document.querySelector('.title-h1');
=======
//créer une zone de textarea
//sur survol, afficher "vous pouvez cliquer ici pour rajouter une tache"
//sur click, prendre le texte saisi comme value et le renvoyer dans une li rattaché un ul sur le div du post-it 
// ce ul ne s'affiche que si il à au moins une valeur (donc .visible à utliser avec un if true else)
// a la fin de la variable créer une const Listecrée = true
// et se rapporter au début du code de la fonction pour mettre un if true afficher message "plus de place pour cette liste ;)"
// else lancer le reste
>>>>>>> a0067e77245a356730937b4819b3dadc1febb0c7
