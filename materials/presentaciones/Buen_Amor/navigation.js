document.addEventListener('DOMContentLoaded', () => {
    // Obtenemos la ruta base (el directorio donde se encuentran los slides)
    const pathParts = window.location.pathname.split('/');
    pathParts.pop(); // Quitamos el nombre del archivo actual (ej: slide1.html)
    const basePath = pathParts.join('/') + '/';

    // Obtenemos el número de la diapositiva actual desde el nombre del archivo
    const currentSlideMatch = window.location.pathname.match(/slide(\d+)\.html/);
    if (!currentSlideMatch) {
        console.error("No se pudo determinar el número de la diapositiva.");
        return; // Salimos si no estamos en un slide
    }
    const currentSlide = parseInt(currentSlideMatch[1]);

    // Seleccionamos los botones
    const prevButton = document.getElementById('prevBtn');
    const nextButton = document.getElementById('nextBtn');

    // Función para ir a la diapositiva anterior
    const goToPrevSlide = () => {
        if (currentSlide > 1) {
            window.location.href = `${basePath}slide${currentSlide - 1}.html`;
        }
    };

    // Función para ir a la siguiente diapositiva
    const goToNextSlide = () => {
        if (currentSlide < 24) { // Asegúrate de que este número sea tu última diapositiva
            window.location.href = `${basePath}slide${currentSlide + 1}.html`;
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
