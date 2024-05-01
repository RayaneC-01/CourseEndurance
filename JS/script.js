document.getElementById("search-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche le rechargement de la page

  var searchQuery = document.getElementById("search-input").value;

  // Envoyer une requête AJAX au serveur pour récupérer les résultats de la recherche
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "search.php?q=" + encodeURIComponent(searchQuery), true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      displaySearchResults(response);
    }
  };
  xhr.send();
});

function displaySearchResults(results) {
  var searchResultsDiv = document.getElementById("search-results");
  searchResultsDiv.innerHTML = ""; // Efface les résultats précédents

  if (results.length === 0) {
    searchResultsDiv.innerHTML = "Aucun résultat trouvé.";
    return;
  }

  // Affiche les résultats
  results.forEach(function (result) {
    var resultItem = document.createElement("div");
    resultItem.textContent = result.title;
    searchResultsDiv.appendChild(resultItem);
  });
}

// console.log(searchForm);
/*
// Sélectionnez l'élément avec la classe "dropdown" et "bloc-top"
const dropdown = document.querySelector(".dropdown");
const BlocDrop = document.querySelector(".bloc-top");
const image = document.querySelector(".left-img");
let isRotated = false;
// Initialisez un index de basculement
let toggleIndex = 0;
 
// Écoutez l'événement de clic sur l'élément "bloc-top"
BlocDrop.addEventListener('click', BlocTop);
// Écoutez l'événement de clic sur l'image
image.addEventListener('click', Dropdown);
 
 
function BlocTop() {
  if (toggleIndex === 0) {
    // Si l'index de basculement est à 0, ajustez la hauteur de l'élément "dropdown"
    dropdown.style.height = `${dropdown.scrollHeight}px`;
    toggleIndex++;
    // Supprimez la bordure de l'élément "dropdown"
    dropdown.style.border = "none";
  } else {
    // Sinon, réinitialisez la hauteur de "dropdown"
    dropdown.style.height = `${BlocDrop.scrollHeight}px`;
    toggleIndex--;
    // Réglez la hauteur de "dropdown" à 60px
    dropdown.style.height = "60px";
  }
}
 
function Dropdown() {
  if (!isRotated) {
    rotateImage.classList.add("rotate-180deg"); // Ajoutez la classe pour la rotation
  } else {
    rotateImage.classList.remove("rotate-180deg"); // Supprimez la classe pour réinitialiser la rotation
  }
 
  isRotated = !isRotated; // Inversez l'état de rotation
}
 
 
// Définissez une fonction pour ajouter ou supprimer une classe "styled" à un élément
function addOrRemoveStyleClass() {
  const styledSection = document.querySelector('.styled-section');
  if (styledSection.classList.contains('styled')) {
    styledSection.classList.remove('styled');
  } else {
    styledSection.classList.add('styled');
  }
}
 
// Définissez une fonction pour modifier le texte de paragraphe et les styles
function SplitText() {
  const sectionParagraph = document.querySelector(".section-paragraph");
  sectionParagraph.style.fontFamily = "Young Serif, serif";
  sectionParagraph.style.fontWeight = "none";
  sectionParagraph.style.fontSize = "30px";
  // Récupérez le texte du paragraphe
  const texte = sectionParagraph.innerHTML;
 
  // Remplacez les points par des points suivis d'un saut de ligne
  const texteAvecSautsDeLigne = texte.replace(/\./g, '.<br>');
 
  // Mettez à jour le contenu du paragraphe avec le texte modifié
  sectionParagraph.innerHTML = texteAvecSautsDeLigne;
 
}
 
// Définissez une fonction pour appliquer des styles au lien avec l'ID "style-button"
// function applyStylesToLink() {
//   const linkpage = document.getElementById("style-button");
 
//   // Appliquez des styles de texte au lien
//   linkpage.style.textDecoration = 'none';
//   linkpage.style.fontFamily = "sans-serif", "Tahoma, Geneva, Verdana, Segoe UI";
//   linkpage.style.fontSize = '27px';
//   linkpage.style.color = '#768de3';
 
//   // Écoutez les événements pour modifier les styles de lien au survol, au clic, etc.
//   linkpage.addEventListener('mouseover', () => {
//     linkpage.style.color = '#202020';
//   });
//   linkpage.addEventListener('mousedown', () => {
//     linkpage.style.color = '#e91e63';
//   });
//   linkpage.addEventListener("click", () => {
//     linkpage.style.color = "#EC8F7C";
//   });
 
// }
 
// Ajoutez des styles aux éléments au chargement de la page
 
document.addEventListener('DOMContentLoaded', () => {
  SplitText();
  // applyStylesToLink();
});
*/
