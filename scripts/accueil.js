const dropdown = document.querySelector(".dropdown");
const btnDrop = document.querySelector(".bloc-top");


let toggleIndex = 0;

btnDrop.addEventListener('click', () => {

    // console.log(dropdown.scrollHeight);

    if(toggleIndex === 0){
        dropdown.style.height = `${dropdown.scrollHeight}px`;
        toggleIndex++;
    } else {
        dropdown.style.height = `${btnDrop.scrollHeight}px`;
        toggleIndex--;
    }

})

function applyStylesToLink() {
  const linkpage = document.getElementById("linkpage");

  linkpage.style.textDecoration = 'none';
  linkpage.style.fontFamily = 'Young Serif, serif';
  linkpage.style.fontSize = '20px';
  linkpage.style.color = '#768de3';

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

function addOrRemoveStyleClass() {
  const styledSection = document.querySelector('.styled-section');

  if (styledSection.classList.contains('styled')) {
    styledSection.classList.remove('styled');
  } else {
    styledSection.classList.add('styled');
  }
}

function SplitText() {
  const sectionParagraph = document.querySelector(".section-paragraph");
  sectionParagraph.style.fontFamily = "Young Serif, serif";
  sectionParagraph.style.fontWeight = "none";
  sectionParagraph.style.fontSize = "24px";
  // Récupérez le texte du paragraphe
  const texte = sectionParagraph.innerHTML;

  // Remplacez les points par des points suivis d'un saut de ligne
  const texteAvecSautsDeLigne = texte.replace(/\./g, '.<br>');

  // Mettez à jour le contenu du paragraphe avec le texte modifié
  sectionParagraph.innerHTML = texteAvecSautsDeLigne;

  const textStyle = document.getElementById("textStyle");
  textStyle.textContent = "Rejoignez-nous pour une journée mémorable de course et de compétition !";
  textStyle.style.color = "#cf0808";
  textStyle.style.fontSize = "25px";
  textStyle.style.fontFamily = "Young Serif, serif";

  const learnMore = document.getElementById("spanPlus");
  learnMore.textContent = "Pour en savoir plus cliquez sur le lien ci-dessous !";
  learnMore.style.display = "block";
  learnMore.style.fontSize = " 27px";
  learnMore.style.color = "#cf0808";
  learnMore.style.fontFamily = "Young Serif, serif";
}

// JavaScript pour ajouter/supprimer des classes CSS
const btnStyle = document.getElementById('style-button');

applyStylesToLink();

btnStyle.addEventListener('click', () => {
  addOrRemoveStyleClass();
});

document.addEventListener('DOMContentLoaded', () => {
  SplitText();
});