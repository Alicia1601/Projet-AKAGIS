// Gestion de la soumission du formulaire de nouveau fil
const newThreadForm = document.getElementById('new-thread-form');
if (newThreadForm) {
    newThreadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Discussion créée avec succès !');
        newThreadForm.reset();
    });
}

// Gestion des boutons "Rejoindre la discussion"
document.querySelectorAll('.btn-join-thread').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Discussion à venir : fonctionnalité en cours de développement !');
    });
});