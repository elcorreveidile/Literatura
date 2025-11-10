document.addEventListener('DOMContentLoaded', () => {
    // --- CONFIGURACIÓN DE LA PRESENTACIÓN DE LAZARILLO ---
    const totalSlides = 15; // 15 diapositivas sobre Lazarillo

    // --- DETECCIÓN DE DIAPOSITIVA ACTUAL ---
    const currentSlideMatch = window.location.pathname.match(/\/?slide(\d+)\.html/);
    if (!currentSlideMatch) {
        console.error("Este script debe ejecutarse en un archivo llamado slideN.html");
        return;
    }
    const currentSlide = parseInt(currentSlideMatch[1]);

    // --- REFERENCIAS A ELEMENTOS DEL DOM ---
    const prevButton = document.getElementById('prevBtn');
    const nextButton = document.getElementById('nextBtn');
    const menuList = document.getElementById('menuList');

    // --- FUNCIONES DE NAVEGACIÓN ---
    const goToPrevSlide = () => {
        if (currentSlide > 1) {
            window.location.href = `slide${currentSlide - 1}.html`;
        }
    };

    const goToNextSlide = () => {
        if (currentSlide < totalSlides) {
            window.location.href = `slide${currentSlide + 1}.html`;
        }
    };

    const goToSlide = (slideNumber) => {
        if (slideNumber >= 1 && slideNumber <= totalSlides) {
            window.location.href = `slide${slideNumber}.html`;
        }
    };

    // --- LÓGICA DEL MENÚ LATERAL (CARGA DINÁMICA) ---
    async function populateMenu() {
        if (!menuList) return;

        // Mostrar mensaje de carga
        menuList.innerHTML = '<li style="padding: 20px; text-align: center; color: #c9a97e;">Cargando índice...</li>';

        for (let i = 1; i <= totalSlides; i++) {
            try {
                // Obtenemos el HTML de cada diapositiva
                const response = await fetch(`slide${i}.html`);
                if (!response.ok) {
                    throw new Error(`No se encontró slide${i}.html`);
                }
                const htmlText = await response.text();

                // Extraemos el título usando una expresión regular
                const titleMatch = htmlText.match(/<title>(.*?)<\/title>/i);
                const title = titleMatch ? titleMatch[1] : `Diapositiva ${i}`;

                // Creamos el elemento de la lista
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = `slide${i}.html`;
                a.textContent = `${i}. ${title}`;

                // Resaltamos la diapositiva actual
                if (i === currentSlide) {
                    a.classList.add('active');
                }

                li.appendChild(a);
                menuList.appendChild(li);

            } catch (error) {
                console.error(`Error al cargar el título para slide${i}.html:`, error);
                // Si hay un error, lo indicamos en el menú
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = `#`;
                a.textContent = `${i}. (Error al cargar)`;
                a.style.color = 'red';
                li.appendChild(a);
                menuList.appendChild(li);
            }
        }
    }

    // --- ASIGNACIÓN DE EVENTOS ---
    prevButton?.addEventListener('click', goToPrevSlide);
    nextButton?.addEventListener('click', goToNextSlide);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            goToPrevSlide();
        } else if (event.key === 'ArrowRight') {
            goToNextSlide();
        } else if (event.key === 'Home') {
            goToSlide(1);
        } else if (event.key === 'End') {
            goToSlide(totalSlides);
        } else if (event.key >= '1' && event.key <= '9') {
            const slideNum = parseInt(event.key);
            if (slideNum <= totalSlides) {
                goToSlide(slideNum);
            }
        }
    });

    // --- INICIALIZACIÓN ---
    populateMenu();
});