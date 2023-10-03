
// le menu déroulant en appuyant sur le bouton Ajouter une checklist
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownMenu = document.querySelector(".dropdown-menu-content");
// We listen for a click event
dropdownBtn.addEventListener("click", function () {
dropdownMenu.classList.toggle("visible");
});




// ne pas oublier de rajouter une fonction "vous ne pouvez pas rajouter plus de listes" si la grid est pleine. Se limiter à 6 ou 8 listes par exemple. 

// function supprimer une liste sur clic du bouton "X"


// la fonction de création des post-it 
// const postits = document.querySelector(".post-Its");

// //des arguments vont êter a rajouter à cette fonction au cours du développement par rapport à l'objet ou le tableau qui va nous servir de référence pour les modeles de post it
// const createPostIt = () => {
//     const postIt = document.createElementNS('div');
//     postIt.classList.add("post-it");   
//    //si on souhaite faire une image de fond type post-it générique pour notre post it, utiliser cette ligne, sinon voir ensemble comment faire 
//    //postIt.style.backgroundImage = 
//     postits.appendChild("postIt"); 

// }


// je clique sur le bouton ajouter une liste de taches


// le menu déroulant se déroule en roulant

// je survole le menu déroulant, cela met en surimprssion mon choix de la ligne

// je clique sur un item du menu déroulant pour génerer une création d'un module de list
// switch case 1 "module A": function creation de to do list (argument en fonction )
// appel de la function création de to do list


//



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

//QUENTIN

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
// le menu déroulant en appuyant sur le bouton Ajouter une checklist
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownMenu = document.querySelector('.dropdown-menu-content');
dropdownBtn.addEventListener("click", function () {
dropdownMenu.classList.toggle("visible");
});

// // Déclaration de Post-Its, la div qui prendra les autres posts its
const postItsgroupe = document.querySelector(".post-its");
const buttonUn = document.querySelector('.button1');
const buttonOneInUse = true;
// // cliquer sur le bouton ajouter une toDoList
// // function création du premier post-it
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
     //test pour voir si je peux remplir ou afficher mes li dans ul
    //  const listeLiOne = document.createElement('li');
    //  listeLiOne.innerHTML = "tuez moi rien n'a de sens";
    //  taskListOne.appendChild(listeLiOne); 

//je cree une form 
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

    postitFormOne.appendChild(submitform);    

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
   


    postitFormOne.appendChild(submitform);    
//je recupere ses inputs
    const toDoPostOne= document.querySelector('#formOne');
    const toDoInputLiOne = document.querySelector('#todoinputOne');
    const toDoListOne = document.querySelector('.tasklistOne');
//je les transforme en un li dans ul
    postitFormOne.onsubmit = function(event) {
    event.preventDefault();
    const newTodoListUn = document.createElement("li");
    newTodoListUn.innerHTML = toDoInputLiOne.value;
    toDoListOne.appendChild(newTodoListUn);
    toDoInputLiOne.value = "";  
     };

 });
//pensez à incorporer une verification sur début de création
//si on a déjà une liste créée, on envoie un texte a l'utilisateur
//pour ça il faut créer une cosnt = true en fin de création et la faire verifier en début de

// fonction création post-it tache urgente et title supprimé
// const urgentTaskPostIt = () => {
// const titleH1 = document.querySelector('.title-h1');

