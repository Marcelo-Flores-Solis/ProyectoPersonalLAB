document.addEventListener('DOMContentLoaded', () => {
    
    // Scroll Observer
    // Seleccionamos todos los elementos con la clase .game-info
    const globitos = document.querySelectorAll('.game-info');

    // Configuración del vigilante
    const opciones = {
        threshold: 0.3, 
        rootMargin: "0px"
    };

    // Observer
    const vigilante = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {

            if(entrada.isIntersecting){
                entrada.target.classList.add('visible');
            
                observador.unobserve(entrada.target);
            }
        });
    }, opciones);

    globitos.forEach(globo => {
        vigilante.observe(globo);
    });


    const btnDescubre = document.querySelector('.btn-1');
    const seccionCatalogo = document.querySelector('#catalogo');

    if (btnDescubre && seccionCatalogo) {
        btnDescubre.addEventListener('click', (e) => {
            e.preventDefault(); 
            seccionCatalogo.scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }

});