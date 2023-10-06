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

// Déclaration de Post-Its, la div qui prendra les autres posts its
const postItsgroupe = document.querySelector(".post-its");
const postItUrgent = document.querySelector(".title-h1");
const buttonOne = document.querySelector('.button1');
const buttonTwo = document.querySelector('.button2');
const buttonThree = document.querySelector('.button3');
const buttonFour = document.querySelector('.button4');
const checkForm = `<svg xmlns="http://www.w3.org/2000/svg" class="icons_val" x="0px" y="0px" width="1.5rem" height="1.5rem" viewBox="0 0 48 48">
    <circle class="circle_icons" cx="28" cy="28" r="18.5" fill="#a5d6a7"></circle><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M35.4,38.8c-3.2,2.4-7.1,3.9-11.4,3.9C13.7,42.7,5.3,34.3,5.3,24c0-2.6,0.6-5.2,1.5-7.4"></path><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M12.1,9.6C15.3,7,19.5,5.3,24,5.3c10.3,0,18.7,8.4,18.7,18.7c0,2.3-0.4,4.5-1.2,6.6"></path><polyline fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" points="16.5,23.5 21.5,28.5 32,18"></polyline>
    </svg>`;

//les constantes pour limiter l'usage d'une todo liste à une seule
let buttonOneInUse = 0;
let buttonTwoInUse = 0;
let buttonThreeInUse = 0;
let buttonFourInUse = 0;

// function création du premier post-it
buttonOne.addEventListener('click', function() {
    if (buttonOneInUse == 0 ){
    // creer un element id dans le grand bloc des posts it
    const postitOne = document.createElement("div");
    postitOne.classList.add("post-it");
    postitOne.classList.add("postremoveOne");
    postItsgroupe.appendChild(postitOne);
    console.log('.postit');
    // je créé un bouton pour supprimer la to do list ensuite
    const removeButtonOne = document.createElement('button');
    removeButtonOne.classList.add("removeOne");
    postitOne.appendChild(removeButtonOne);
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

    //je recupere ses inputs
    const toDoPostOne= document.querySelector('#formOne');
    const toDoInputLiOne = document.querySelector('#todoinputOne');
    const toDoListOne = document.querySelector('.tasklistOne');
    //je les transforme en un li dans ul
        postitFormOne.onsubmit = function (event) {
            event.preventDefault();
            const newTodoListUn = document.createElement("li");
            if (toDoInputLiOne.value.trim() !== "") {
                newTodoListUn.innerHTML = (`${checkForm} ${toDoInputLiOne.value}`);
                toDoListOne.appendChild(newTodoListUn);
                toDoInputLiOne.value = "";
            }
            else {
                return "Can't send"
            }
        }
    //j'incrémente de 1 mon Butt'use pour qu'il se bloque
    buttonOneInUse += 1;
    // j'écoute les clicks dessus et je supprime la div si jamais on le touche !
    removeButtonOne.addEventListener('click', function () {const divtoremoveOne = document.querySelectorAll('.postremoveOne');
    divtoremoveOne.forEach(postremoveOne => {
        postremoveOne.remove();
        buttonOneInUse -= 1;})});
        } else {
            alert("Désolé Cher Utilisateur mais il n'est pas encore possible de créer plusieurs fois la même liste !");
        }

    });


 // fonction bouton 2 dite urgente 

 buttonTwo.addEventListener('click', function() {
    if (buttonTwoInUse == 0 ){
    // creer un element id dans ld div du H1
    const postitTwo = document.createElement("div");
    postitTwo.classList.add("post-itU");
    postItUrgent.innerHTML = "<h1>Tâche urgente</h1>";
    postItUrgent.classList.toggle("visible2");
    postItUrgent.appendChild(postitTwo);

 // creer un tableau d'ul pour y mettre les li d'après
    const removeButtonTwo= document.createElement('button');
    removeButtonTwo.classList.add("removeTwo");
    postitTwo.appendChild(removeButtonTwo);
    // creer un tableau d'ul pour y mettre les li d'après
     const taskListTwo = document.createElement('ul');
    taskListTwo.classList.add("tasklistTwo");
    taskListTwo.setAttribute("id", "tasklistTwo");
     postitTwo.appendChild(taskListTwo);
    //je cree une form 
    const postitFormTwo = document.createElement("form");
    postitFormTwo.setAttribute("id", "formTwo");
    postitTwo.appendChild(postitFormTwo);
    // je lui donne un input avec setattribute et un input de validation
    const inputFormTwo = document.createElement("input");
    inputFormTwo.setAttribute("type", "text");
    inputFormTwo.setAttribute("name", "todo");
    inputFormTwo.setAttribute("placeholder", "tuez moi svp");
    inputFormTwo.setAttribute("value", "");
    inputFormTwo.setAttribute("id", "todoinputTwo");
    postitFormTwo.appendChild(inputFormTwo);
    const submitform = document.createElement("input");
    submitform.setAttribute("type", "submit");
    submitform.setAttribute("value", "send");
    postitFormTwo.appendChild(submitform);    

    //je recupere ses inputs
    const toDoPostTwo= document.querySelector('#formTwo');
    const toDoInputLiTwo = document.querySelector('#todoinputTwo');
    const toDoListTwo = document.querySelector('.tasklistTwo');
//je les transforme en un li dans ul
    postitFormTwo.onsubmit = function(event) {
    event.preventDefault();
    const newTodoListTwo = document.createElement("li");
    newTodoListTwo.innerHTML = toDoInputLiTwo.value;
    validateTextarea(toDoInputLiTwo.value);
    toDoListTwo.appendChild(newTodoListTwo);
    toDoInputLiTwo.value = "";  
     };
     buttonTwoInUse += 1
} else {
    alert("Désolé Cher Utilisateur mais il n'est pas encore possible de créer plusieurs fois la même liste !");
}

});

 
 // fonction bouton 3

 buttonThree.addEventListener('click', function() {
    if (buttonThreeInUse == 0 ){
    // creer un element id dans le grand bloc des posts it
    const postitThree = document.createElement("div");
    postitThree.classList.add("post-it");
    postItsgroupe.appendChild(postitThree);
    console.log('.postit');
    // je créé un bouton pour supprimer la to do list ensuite
    const removeButtonThree= document.createElement('button');
    removeButtonThree.classList.add("removeThree");
    postitThree.appendChild(removeButtonThree);
 // creer un tableau d'ul pour y mettre les li d'après
     const taskListThree = document.createElement('ul');
     taskListThree.classList.add("tasklistThree")
     postitThree.appendChild(taskListThree);    
//je cree une form 
    const postitFormThree = document.createElement("form");
    postitFormThree.setAttribute("id", "formThree");
    postitThree.appendChild(postitFormThree);
// je lui donne un input avec setattribute et un input de validation
    const inputFormThree = document.createElement("input");
    inputFormThree.setAttribute("type", "text");
    inputFormThree.setAttribute("name", "todo");
    inputFormThree.setAttribute("placeholder", "tuez moi svp");
    inputFormThree.setAttribute("value", "");
    inputFormThree.setAttribute("id", "todoinputThree");
    postitFormThree.appendChild(inputFormThree);
    const submitform = document.createElement("input");
    submitform.setAttribute("type", "submit");
    submitform.setAttribute("value", "send");
    postitFormThree.appendChild(submitform);    

    //je recupere ses inputs
    const toDoPostThree= document.querySelector('#formThree');
    const toDoInputLiThree = document.querySelector('#todoinputThree');
    const toDoListThree = document.querySelector('.tasklistThree');
//je les transforme en un li dans ul
    postitFormThree.onsubmit = function(event) {
    event.preventDefault();
    const newTodoListThree = document.createElement("li");
    newTodoListThree.innerHTML = toDoInputLiThree.value;
    validateTextarea(toDoInputLiThree.value);
    toDoListThree.appendChild(newTodoListThree);
    toDoInputLiThree.value = "";  
     };
     buttonThreeInUse += 1
} else {
    alert("Désolé Cher Utilisateur mais il n'est pas encore possible de créer plusieurs fois la même liste !");
}

});

// fonction bouton 4

buttonFour.addEventListener('click', function() {
if (buttonFourInUse == 0 ){
     // creer un element id dans le grand bloc des posts it
     const postitFour = document.createElement("div");
     postitFour.classList.add("post-it");
     postItsgroupe.appendChild(postitFour);
     console.log('.postit');
     // je créé un bouton pour supprimer la to do list ensuite
    const removeButtonFour= document.createElement('button');
    removeButtonFour.classList.add("removeFour");
    postitFour.appendChild(removeButtonFour);
  // creer un tableau d'ul pour y mettre les li d'après
    const taskListFour = document.createElement('ul');
    taskListFour.classList.add("tasklistFour")
    postitFour.appendChild(taskListFour);
 //je cree une form 
    const postitFormFour = document.createElement("form");
    postitFormFour.setAttribute("id", "formThree");
    postitFour.appendChild(postitFormFour);
 // je lui donne un input avec setattribute et un input de validation
    const inputFormFour = document.createElement("input");
    inputFormFour.setAttribute("type", "text");
    inputFormFour.setAttribute("name", "todo");
    inputFormFour.setAttribute("placeholder", "tuez moi svp");
    inputFormFour.setAttribute("value", "");
    inputFormFour.setAttribute("id", "todoinputFour");
    postitFormFour.appendChild(inputFormFour);
    const submitform = document.createElement("input");
    submitform.setAttribute("type", "submit");
    submitform.setAttribute("value", "send");
    postitFormFour.appendChild(submitform);    
 
//je recupere ses inputs
    const toDoPostFour= document.querySelector('#formFour');
    const toDoInputLiFour = document.querySelector('#todoinputFour');
    const toDoListFour = document.querySelector('.tasklistFour');
//je les transforme en un li dans ul
    postitFormFour.onsubmit = function(event) {
    event.preventDefault();
    const newTodoListFour = document.createElement("li");
    newTodoListFour.innerHTML = toDoInputLiFour.value;
    validateTextarea(toDoInputLiFour.value);
    toDoListFour.appendChild(newTodoListFour);
    toDoInputLiFour.value = "";  
    };
    buttonFourInUse += 1
} else {
    alert("Désolé Cher Utilisateur mais il n'est pas encore possible de créer plusieurs fois la même liste !");
}

});
