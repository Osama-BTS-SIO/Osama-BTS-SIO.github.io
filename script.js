document.addEventListener('DOMContentLoaded', function () {
    // Mettre à jour l'année automatiquement
    document.getElementById('current-year').textContent = new Date().getFullYear();

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
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Gestion du clic sur les liens
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Retire 'active' de tous les liens
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Ajoute 'active' au lien cliqué
            this.classList.add('active');
        });
    });
    
    // Gestion du scroll pour mettre à jour l'état actif
    window.addEventListener('scroll', function() {
        const fromTop = window.scrollY + 100;
        
        navLinks.forEach(link => {
            const section = document.querySelector(link.hash);
            
            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Gestion des clics
    document.querySelectorAll('.sidebar nav .nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Retire 'active' de tous les liens
            document.querySelectorAll('.sidebar nav .nav-link').forEach(l => {
                l.classList.remove('active');
            });
            
            // Ajoute 'active' au lien cliqué
            this.classList.add('active');
            
            // Scroll vers la section
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Gestion du scroll
    window.addEventListener('scroll', function() {
        const fromTop = window.scrollY + 100;
        
        document.querySelectorAll('.sidebar nav .nav-link').forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (fromTop >= sectionTop && fromTop < sectionTop + sectionHeight) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            }
        });
    });
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    // 1. Masque toutes les sections
    document.querySelectorAll('.content-section').forEach(section => {
      section.classList.remove('active');
    });
    
    // 2. Affiche LA BONNE SECTION
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.classList.add('active');
      
      // 3. Scroll instantané (sans animation)
      window.scrollTo({
        top: targetSection.offsetTop - 20,
        behavior: 'instant'
      });
    }
  });
});
