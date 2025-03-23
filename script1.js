// Exemple simple : Afficher un message de confirmation lors de la soumission du formulaire
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche la soumission par défaut
        alert('Votre message a été envoyé !');
    });
}