// Scrollreveal.js

//Jumbotron
// Meet Hilary.
ScrollReveal().reveal('.headline', { 
    delay: 250,
    origin: 'top',
    distance: '200px',
    easing: 'ease-in'
});

// Bio
ScrollReveal().reveal('.lead', { 
    delay: 2000,
    origin: 'left',
    distance: '200px',
    easing: 'ease-in'
});

// Profile Picture
ScrollReveal().reveal('.hilpic', { 
    delay: 2000,
    origin: 'right',
    distance: '200px',
    easing: 'ease-in'
});

// Portfolio Section
// Each card individually by class?
ScrollReveal().reveal('.spotlight', {
    distance: '0px',
    opacity: 0.8
});

// End Scrollreveal.js