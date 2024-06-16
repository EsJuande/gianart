const palabras = ["Bigotudo", "Choto", "Quilombero", "Trolo", "Petero"]; // Array con las palabras a mostrar
let indiceActual = 0; // Índice de la palabra actual

const h1Cambiante = document.getElementById('cambiante');


console.log('ME ESTOY EJECUTANDO!')

// Función para crear y agregar un nuevo span
function crearSpan(palabra) {
    const nuevoSpan = document.createElement('span');
    nuevoSpan.textContent = palabra;
    h1Cambiante.appendChild(nuevoSpan);
}

// Función para mostrar la siguiente palabra
function mostrarSiguientePalabra() {
    const spanActual = spans[indiceActual]; // Span actual
    indiceActual = (indiceActual + 1) % palabras.length; // Calcula el siguiente índice
    const spanNuevo = spans[indiceActual]; // Span nuevo

    // Animación fade out del span actual
    spanActual.style.display = 'block';
    setTimeout(() => {
        spanActual.style.opacity = '0'; // Oculta el span actual después del fade out
    }, 500); // Duración del fade out (en milisegundos)

    // Animación fade in del span nuevo
    spanNuevo.style.display = 'block';
    setTimeout(() => {
        spanNuevo.style.opacity = 1; // Opacidad 1 después del fade in
    }, 1500);
}

// Crea los spans iniciales y muestra la primera palabra
palabras.forEach(crearSpan);
const spans = h1Cambiante.querySelectorAll('span'); // Obtiene todos los spans
mostrarSiguientePalabra();

// Cambia la palabra cada 2 segundos
setInterval(mostrarSiguientePalabra, 2500);
