/**
 * Utilidades para manejo de scroll y animaciones
 */
export class ScrollUtils {

    /**
     * Desplaza suavemente la vista hasta el elemento con el id proporcionado
     * @param elementId ID del elemento al que desplazarse
     * @param offset Desplazamiento adicional en píxeles (útil para headers fijos)
     */
    static scrollToElement(elementId: string, offset: number = 0): void {
        const element = document.getElementById(elementId);

        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    /**
     * Inicializa el comportamiento de animación al hacer scroll para elementos con una clase específica
     * @param selector Selector CSS para los elementos a animar
     * @param activeClass Clase a añadir cuando el elemento es visible
     * @param offset Offset para activar la animación antes de que el elemento entre completamente en el viewport
     */
    static initScrollAnimations(
        selector: string = '.reveal',
        activeClass: string = 'active',
        offset: number = 150
    ): void {
        const revealElements = document.querySelectorAll(selector);

        const checkAnimations = () => {
            const windowHeight = window.innerHeight;

            revealElements.forEach((element) => {
                const elementTop = element.getBoundingClientRect().top;

                if (elementTop < windowHeight - offset) {
                    element.classList.add(activeClass);
                } else {
                    element.classList.remove(activeClass);
                }
            });
        };

        // Comprobar animaciones al cargar y al hacer scroll
        window.addEventListener('scroll', checkAnimations);
        window.addEventListener('resize', checkAnimations);

        // Comprobar estado inicial
        setTimeout(checkAnimations, 100);
    }
}