document.addEventListener('DOMContentLoaded', () => {
    // Obtenemos el número de la diapositiva actual desde el nombre del archivo
    const currentSlideMatch = window.location.pathname.match(/\/?slide(\d+)\.html/);
    if (!currentSlideMatch) {
        console.error("Este script debe ejecutarse en un archivo llamado slideN.html");
        return;
    }
    const currentSlide = parseInt(currentSlideMatch[1]);

    // Seleccionamos los botones
    const prevButton = document.getElementById('prevBtn');
    const nextButton = document.getElementById('nextBtn');

    // --- NAVEGACIÓN ---
    // Como todos los archivos están en la misma carpeta,
    // solo necesitamos el nombre del archivo para navegar.

    // Función para ir a la diapositiva anterior
    const goToPrevSlide = () => {
        if (currentSlide > 1) {
            window.location.href = `slide${currentSlide - 1}.html`;
        }
    };

    // Función para ir a la siguiente diapositiva
    const goToNextSlide = () => {
        // <-- ¡IMPORTANTE! Cambia este número si tienes más o menos diapositivas
        const totalSlides = 24; 
        if (currentSlide < totalSlides) {
            window.location.href = `slide${currentSlide + 1}.html`;
        }
    };

    // --- EVENTOS ---
    // Añadimos los eventos a los botones (si existen)
    prevButton?.addEventListener('click', goToPrevSlide);
    nextButton?.addEventListener('click', goToNextSlide);

    // Añadimos la navegación con las flechas del teclado
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            goToPrevSlide();
        } else if (event.key === 'ArrowRight') {
            goToNextSlide();
        }
    });
});
