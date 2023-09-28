// le menu déroulant en appuyant sur le bouton Ajouter une checklist
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownMenu = document.querySelector(".dropdown-menu-content");

// Fonction pour gérer l'affichage du menu déroulant
function toggleDropdownMenu() {
    dropdownMenu.classList.toggle("visible");
}

// Fonction pour afficher la date et l'heure
function dateAndTime() {
    const currentDateAndTimeElements = document.querySelectorAll(".currentDateAndTime");

    const currentDate = new Date();
    const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const optionsTime = { hour: '2-digit', minute: '2-digit' }; // N'inclut pas les secondes

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


