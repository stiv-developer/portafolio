

const links = document.querySelectorAll('.nav ul li a');


links.forEach(link => {
    link.addEventListener('click', function() {
        // Remueve la clase 'active' de todos los enlaces
        links.forEach(link => link.classList.remove('active'));
        
        // Agrega la clase 'active' al enlace que se ha hecho clic
        this.classList.add('active');
    });
})



// Selecciona el elemento del halo y los enlaces del menú
const cursorHalo = document.querySelector('.cursor-halo');
const menuLinks = document.querySelectorAll('.nav ul li a');

// Función para mover el halo con el cursor
document.addEventListener('mousemove', (event) => {
    cursorHalo.style.left = `${event.clientX}px`;
    cursorHalo.style.top = `${event.clientY}px`;
});

// Evita el desplazamiento en los enlaces del menú y mueve el halo
menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Evita el desplazamiento predeterminado
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Scroll suave hacia la sección deseada
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

