document.addEventListener("DOMContentLoaded", () => {
    
    // obssservador
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // ELEMENTOS PARA ANIMAR
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

    // APLICAR ANIMACIÓN Y EFECTO CASCADA
    elementsToAnimate.forEach((el, index) => {
        el.classList.add('reveal'); 
        
        const parentGrid = el.closest('.grid-hub, .grid-recomendados, .music-grid, .series-grid, .chess-grid, .piano-grid, .gems-grid');
        
        if (parentGrid) {
            
            const delayClass = `delay-${(index % 4) + 1}`;
            el.classList.add(delayClass);
        }

        observer.observe(el);
    });

    // HEADER INTELIGENTE (Se esconde/aparece)
    let lastScroll = 0;
    const header = document.querySelector('header'); 
    
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