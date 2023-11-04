// Sélectionnez l'élément avec la classe "dropdown" et "bloc-top"
const dropdown = document.querySelector(".dropdown");
const BlocDrop = document.querySelector(".bloc-top");
const image = document.querySelector(".left-img");
let isRotated = false;
// Initialisez un index de basculement
let toggleIndex = 0;
// Sélectionnez l'élément avec l'ID "style-button"
const button = document.getElementById('style-button');


// Écoutez l'événement de clic sur l'élément "bloc-top"
BlocDrop.addEventListener('click', BlocTop);
// Écoutez l'événement "mouseover" (souris survolant) sur le bouton
button.addEventListener('mouseover', BtnClick);
// Écoutez l'événement "mouseout" (souris quittant) sur le bouton
button.addEventListener('mouseout', BtnClick);
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

// Définissez une fonction pour gérer les événements de souris
function BtnClick(event) {
  (event.type == "mouseover") ? button.style.transform = 'translateY(0)' : button.style.transform = 'translateY(-5px)';
}
// Définissez une fonction pour appliquer des styles au lien avec l'ID "style-button"
function applyStylesToLink() {
  const linkpage = document.getElementById("style-button");

  // Appliquez des styles de texte au lien
  linkpage.style.textDecoration = 'none';
  linkpage.style.fontFamily = "sans-serif", "Tahoma, Geneva, Verdana, Segoe UI";
  linkpage.style.fontSize = '26px';
  linkpage.style.color = '#768de3';

  // Écoutez les événements pour modifier les styles de lien au survol, au clic, etc.
  linkpage.addEventListener('mouseover', () => {
    linkpage.style.color = '#202020';
  });
  linkpage.addEventListener('mousedown', () => {
    linkpage.style.color = '#e91e63';
  });
  linkpage.addEventListener("click", () => {
    linkpage.style.color = "#EC8F7C";
  });

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

  // Modifiez le texte et les styles d'autres éléments
  const textStyle = document.getElementById("textStyle");
  textStyle.textContent = "Rejoignez-nous pour une journée mémorable de course et de compétition !";
  textStyle.style.color = "#cf0808";
  textStyle.style.fontSize = "25px";
  textStyle.style.fontFamily = "Young Serif, serif";

  const learnMore = document.getElementById("spanPlus");
  learnMore.textContent = "Pour en savoir plus cliquez sur le lien ci-dessous !";
  learnMore.style.display = "block";
  learnMore.style.fontSize = "25px";
  learnMore.style.color = "#cf0808";
  learnMore.style.fontFamily = "Young Serif, serif";
}

// Sélectionnez l'élément avec l'ID "style-button" et ajoutez un gestionnaire d'événements de clic
const btnStyle = document.getElementById('style-button');
btnStyle.addEventListener('click', () => {
  addOrRemoveStyleClass();
});

// Ajoutez des styles aux éléments au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  SplitText();
});
applyStylesToLink();

