menú
const menuLinks = document.querySelectorAll('.menu a');

// Agrega un evento de clic a cada enlace
menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado de anclaje
        const targetId = link.getAttribute('href').substring(1); // Obtiene el ID del objetivo
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth' // Desplazamiento suave
            });
        }
    });
});
