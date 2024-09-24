// Función de login que valida el nombre de usuario y contraseña
function login() {
    // Usuario y contraseña de prueba
    const validUsername = "admin";
    const validPassword = "1234";

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

// Función de logout para cerrar sesión
function logout() {
    // Remueve el estado de login
    localStorage.removeItem("loggedIn");

    // Redirige al formulario de login
    window.location.href = "index.html";
}

// Verificar si el usuario está logueado al cargar la página de contenido
window.onload = function() {
    const path = window.location.pathname;

    if (path.includes("content.html")) {
        const isLoggedIn = localStorage.getItem("loggedIn");

        // Si no está logueado, redirige al formulario de login
        if (isLoggedIn !== "true") {
            window.location.href = "index.html";
        }
    }
};
