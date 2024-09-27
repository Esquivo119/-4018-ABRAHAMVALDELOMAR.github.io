// Función de login que valida el nombre de usuario y contraseña
function login() {
    // Usuario y contraseña de prueba
    const validUsername = "123subdirectora";
    const validPassword = "abrahamvaldelomar";

    // Obtenemos los valores del formulario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error");

    // Validación de usuario y contraseña
    if (username === validUsername && password === validPassword) {
        // Almacena el estado de login en el localStorage
        localStorage.setItem("loggedIn", "true");

        // Redirige al contenido
        window.location.href = "content.html";
    } else {
        // Muestra un mensaje de error
        errorMessage.textContent = "Usuario o contraseña incorrectos.";
    }
    
    // Evitar que el formulario recargue la página
    return false;
}



// Verificar si el usuario está logueado al cargar la página de contenido
window.onload = function() {
    const path = window.location.pathname;

    if (path.includes("content.html")) {
        const isLoggedIn = localStorage.getItem("loggedIn");

        // Si no está logueado, redirige al formulario de login
        if (isLoggedIn !== "true") {
            window.location.href = "content.html";
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
