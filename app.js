document.addEventListener('DOMContentLoaded', () => {

    const themeToggleButton = document.getElementById('theme-toggle');
    
    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

    const serviceButtons = document.querySelectorAll('.service-btn');
    
    serviceButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert(`Has hecho clic en: ${button.textContent}`);
        });
    });

    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
        alert('¡Formulario enviado!)');
        contactForm.reset();
    });

});
