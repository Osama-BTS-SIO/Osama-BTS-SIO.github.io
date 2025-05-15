document.addEventListener('DOMContentLoaded', function () {
    // Mettre à jour l'année automatiquement
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Mettre à jour la date et l’heure
    function updateDateTime() {
        const now = new Date();

        const optionsDate = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };

        const optionsTime = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };

        const date = now.toLocaleDateString('fr-FR', optionsDate);
        const time = now.toLocaleTimeString('fr-FR', optionsTime);

        const formatted = `<i class="fas fa-clock"></i> ${date}<br>${time}`;
        document.getElementById('datetime').innerHTML = formatted;
    }

    setInterval(updateDateTime, 1000);
    updateDateTime();

    // Gestion du scroll vers les sections
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // enlève le #
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const text = "Bienvenue sur mon Portfolio.";
    const typingText = document.getElementById('typing-text');
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100); // vitesse d'écriture
        }
    }

    typeEffect();
});
