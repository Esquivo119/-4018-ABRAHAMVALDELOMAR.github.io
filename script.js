

// Verificar si el usuario está logueado al cargar la página de contenido
window.onload = function() {
    const path = window.location.pathname;

    if (path.includes("index.html")) {
        const isLoggedIn = localStorage.getItem("loggedIn");

        // Si no está logueado, redirige al formulario de login
        if (isLoggedIn !== "true") {
            window.location.href = "index.html";
        }
    }
};
// Este script es para manejar el scroll suave entre secciones y el envío del formulario de contacto

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Validación simple del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Mensaje enviado correctamente');
    this.reset();
});
