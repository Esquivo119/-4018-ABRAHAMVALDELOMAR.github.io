// Desplazamiento suave al hacer clic en los enlaces de navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

// Resaltar el enlace de navegación correspondiente a la sección visible
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 60;

    sections.forEach(section => {
        if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
            document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
            document.querySelector(`nav a[href="#${section.id}"]`).classList.add('active');
        }
    });
});

// Mostrar una ventana de alerta con opción de redirección
window.addEventListener('load', () => {
    const isMobile = window.innerWidth <= 768;

    const message = isMobile
        ? "Estás usando un dispositivo móvil. ¿Deseas ver la versión optimizada para móviles?"
        : "Bienvenido al sitio web del colegio I.E. № 4018 Abraham Valdelomar. ¿Deseas ver la versión para móviles?";

    if (confirm(message)) {
        // Redireccionar a `indexCelu.html` si el usuario selecciona "Aceptar"
        window.location.href = "indexCelu.html";
    }
});

// Asegurar que el elemento existe antes de aplicar clase
document.addEventListener("DOMContentLoaded", function() {
    var elemento = document.querySelector('.mi-clase');
    if (elemento) {
        elemento.classList.add('nueva-clase');
    } else {
        console.warn('El elemento con la clase ".mi-clase" no se encontró.');
    }
});
