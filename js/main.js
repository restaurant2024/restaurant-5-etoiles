// Smooth scrolling pour la navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation de la navbar au scroll
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".navbar").style.top = "0";
    } else {
        document.querySelector(".navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}

// Gestion du formulaire de réservation
document.getElementById('reservation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Récupération des valeurs du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    // Validation simple
    if (!name || !email || !date || !time || !guests) {
        alert('Veuillez remplir tous les champs');
        return;
    }

    // Simulation d'envoi de données
    alert('Merci pour votre réservation ! Nous vous contacterons bientôt pour la confirmation.');
    this.reset();
});

// Animation des sections au scroll
const observerOptions = {
    root: null,
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observer les sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});
