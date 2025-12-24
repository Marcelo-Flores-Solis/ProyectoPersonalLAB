// assets/js/juegos.js

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. ANIMACIÓN DE APARICIÓN (Scroll Observer) ---
    // Seleccionamos todos los elementos con la clase .game-info
    const globitos = document.querySelectorAll('.game-info');

    // Configuración del vigilante
    const opciones = {
        threshold: 0.3, // Se activa cuando el 30% del elemento es visible
        rootMargin: "0px"
    };

    // Creamos el Vigilante (Observer)
    const vigilante = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            // Si el elemento entra en pantalla
            if(entrada.isIntersecting){
                // Le agregamos la clase 'visible' (definida en CSS)
                entrada.target.classList.add('visible');
                
                // Opcional: Dejar de observar una vez que ya apareció (para ahorrar recursos)
                observador.unobserve(entrada.target);
            }
        });
    }, opciones);

    // Ponemos al vigilante a observar cada globito
    globitos.forEach(globo => {
        vigilante.observe(globo);
    });


    // --- 2. SCROLL SUAVE PARA EL BOTÓN "DESCUBRE" ---
    const btnDescubre = document.querySelector('.btn-1');
    const seccionCatalogo = document.querySelector('#catalogo');

    if (btnDescubre && seccionCatalogo) {
        btnDescubre.addEventListener('click', (e) => {
            e.preventDefault(); // Evita el salto brusco típico de los enlaces
            seccionCatalogo.scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }

});