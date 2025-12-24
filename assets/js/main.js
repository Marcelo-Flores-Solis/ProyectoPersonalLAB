document.addEventListener("DOMContentLoaded", () => {
    
    // 1. CONFIGURACIÓN DEL OBSERVADOR
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Espera a que se vea el 15% del elemento
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Agrega la clase para activar la animación
                entry.target.classList.add('active');
                // Deja de observar para ahorrar recursos
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 2. SELECCIONAR ELEMENTOS PARA ANIMAR
    // Aquí listamos TODAS las clases importantes de tu sitio
    const elementsToAnimate = document.querySelectorAll(`
        .hero-content, 
        .section-title, 
        .intro-bienvenida p,
        .card-highlight, 
        .hub-card, 
        .music-card, 
        .series-card, 
        .chess-card, 
        .study-card, 
        .rule-card,
        .form-container,
        .login-card
    `);

    // 3. APLICAR ANIMACIÓN Y EFECTO CASCADA
    elementsToAnimate.forEach((el, index) => {
        el.classList.add('reveal'); // Los ocultamos de inicio
        
        // Si el elemento está dentro de una grid, calculamos un retraso
        // para que aparezcan uno por uno (efecto dominó)
        const parentGrid = el.closest('.grid-hub, .grid-recomendados, .music-grid, .series-grid, .chess-grid, .piano-grid, .gems-grid');
        
        if (parentGrid) {
            // Usamos el modulo (%) para que el retraso se reinicie cada 4 elementos
            // Esto evita esperas muy largas en listas grandes
            const delayClass = `delay-${(index % 4) + 1}`;
            el.classList.add(delayClass);
        }

        observer.observe(el);
    });

    // 4. HEADER INTELIGENTE (Se esconde/aparece)
    let lastScroll = 0;
    const header = document.querySelector('header'); // Selecciona cualquier header
    
    if (header) {
        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= 0) {
                header.classList.remove("scroll-up");
                return;
            }
            
            if (currentScroll > lastScroll && !header.classList.contains("scroll-down")) {
                header.classList.remove("scroll-up");
                header.classList.add("scroll-down");
            } else if (currentScroll < lastScroll && header.classList.contains("scroll-down")) {
                header.classList.remove("scroll-down");
                header.classList.add("scroll-up");
            }
            lastScroll = currentScroll;
        });
    }
});