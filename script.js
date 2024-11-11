// Slider automático
let currentSlide = 0;
const slides = document.querySelectorAll(".banner-slider .slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Mostrar el primer slide al cargar
showSlide(currentSlide);

// Cambiar de slide cada 3 segundos
setInterval(nextSlide, 3000);

// Manejador de formulario de contacto
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Gracias por contactarnos, ${name}. Hemos recibido tu mensaje.`);
    } else {
        alert("Por favor, completa todos los campos.");
    }
});

// Función para el menú responsivo
function toggleMenu() {
    const navbarLinks = document.getElementById("navbar-links");
    navbarLinks.style.display = navbarLinks.style.display === "flex" ? "none" : "flex";
}
