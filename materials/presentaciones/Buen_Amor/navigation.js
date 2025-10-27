document.addEventListener('DOMContentLoaded', () => {
    // Obtenemos el número de la diapositiva actual desde el nombre del archivo
    const currentPath = window.location.pathname;
    const currentSlide = parseInt(currentPath.match(/slide(\d+)\.html/)[1]);

    // Seleccionamos los botones
    const prevButton = document.getElementById('prevBtn');
    const nextButton = document.getElementById('nextBtn');

    // Función para ir a la diapositiva anterior
    const goToPrevSlide = () => {
        if (currentSlide > 1) {
            window.location.href = `slide${currentSlide - 1}.html`;
        }
    };

    // Función para ir a la siguiente diapositiva
    const goToNextSlide = () => {
        if (currentSlide < 24) { // Asegúrate de que este número sea tu última diapositiva
            window.location.href = `slide${currentSlide + 1}.html`;
        }
    };

    // Añadimos los eventos a los botones
    if (prevButton) {
        prevButton.addEventListener('click', goToPrevSlide);
    }
    if (nextButton) {
        nextButton.addEventListener('click', goToNextSlide);
    }

    // Añadimos la navegación con las flechas del teclado
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            goToPrevSlide();
        } else if (event.key === 'ArrowRight') {
            goToNextSlide();
        }
    });
});