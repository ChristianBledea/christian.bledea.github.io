document.addEventListener("DOMContentLoaded", function () {
    ScrollReveal().reveal('.container', { 
        delay: 200,
        duration: 1000,
        origin: 'bottom',
        distance: '50px'
    });

    ScrollReveal().reveal('.profile-pic', { 
        delay: 400,
        duration: 1000,
        origin: 'left',
        distance: '50px'
    });

    ScrollReveal().reveal('.about-content p', { 
        delay: 600,
        duration: 1000,
        origin: 'right',
        distance: '50px'
    });

    ScrollReveal().reveal('.project-item', { 
        delay: 800,
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
        interval: 200
    });
});
