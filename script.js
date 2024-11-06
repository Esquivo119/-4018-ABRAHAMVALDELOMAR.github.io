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
    const scrollPosition = window.scrollY + 60; // Ajuste de desplazamiento

    sections.forEach(section => {
        if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
            document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
            document.querySelector(`nav a[href="#${section.id}"]`).classList.add('active');
        }
    });
});

// Cargar una alerta de bienvenida cuando la página esté completamente cargada
window.addEventListener('load', () => {
    alert('¡Bienvenido al sitio web del colegio I.E. № 4018 Abraham Valdelomar!');
});

// Detectar si el sitio se está viendo en un dispositivo móvil y ajustar el diseño si es necesario
function ajustarParaMovil() {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        document.body.classList.add('movil');
    } else {
        document.body.classList.remove('movil');
    }
}

// Ejecutar la función al cargar y cuando se redimensiona la ventana
window.addEventListener('resize', ajustarParaMovil);
window.addEventListener('DOMContentLoaded', ajustarParaMovil);
document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar el elemento con la clase .mi-clase
    var elemento = document.querySelector('.mi-clase');

    // Verificar si el elemento existe antes de acceder a classList
    if (elemento) {
        elemento.classList.add('nueva-clase');
    } else {
        console.warn('El elemento con la clase ".mi-clase" no se encontró.');
    }
});
