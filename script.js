//Carrousel

// Sélectionne tous les avis (diapositives)
const slides = document.querySelectorAll('.slide');

// Sélectionne les boutons flèches
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Indice de l'avis actuel (démarre au premier)
let currentIndex = 0;

// Fonction pour afficher un avis spécifique
function showSlide(index) {
  // Cache tous les avis
  slides.forEach(slide => slide.classList.remove('active'));
  // Affiche seulement celui à l'indice donné
  slides[index].classList.add('active');
}

// Fonction pour passer à l'avis suivant
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length; // Passe au suivant, revient au début si fin
  showSlide(currentIndex);
}

// Fonction pour revenir à l'avis précédent
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Revient en arrière, boucle à la fin
  showSlide(currentIndex);
}

// Ajoute les écouteurs de clic sur les flèches
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Affiche le premier avis au chargement
showSlide(currentIndex);   