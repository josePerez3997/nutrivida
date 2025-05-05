import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  /**
   * Inicializa las animaciones de elementos al hacer scroll
   * @param elementSelector Selector CSS para los elementos a animar
   * @param activeClass Clase CSS a añadir cuando el elemento es visible
   * @param offset Píxeles antes de que el elemento entre completamente en el viewport
   */
  initScrollAnimations(
    elementSelector: string = '.reveal',
    activeClass: string = 'active',
    offset: number = 150
  ): void {
    // Esperar a que el DOM esté completamente cargado
    setTimeout(() => {
      const elements = document.querySelectorAll(elementSelector);
      
      const checkElements = () => {
        const windowHeight = window.innerHeight;
        
        elements.forEach((el) => {
          const elementTop = el.getBoundingClientRect().top;
          
          if (elementTop < windowHeight - offset) {
            this.renderer.addClass(el, activeClass);
          } else {
            this.renderer.removeClass(el, activeClass);
          }
        });
      };
      
      // Comprobar elementos al cargar y al hacer scroll
      window.addEventListener('scroll', checkElements);
      window.addEventListener('resize', checkElements);
      
      // Comprobar estado inicial
      checkElements();
    }, 100);
  }
  
  /**
   * Aplica el efecto parallax a elementos
   * @param elementSelector Selector CSS para los elementos a aplicar parallax
   * @param ratio Velocidad del efecto (valores menores = efecto más sutil)
   * @param direction Dirección del movimiento ('up' o 'down')
   */
  initParallaxEffect(
    elementSelector: string = '.parallax',
    ratio: number = 0.3,
    direction: 'up' | 'down' = 'up'
  ): void {
    setTimeout(() => {
      const elements = document.querySelectorAll(elementSelector);
      
      if (elements.length === 0) return;
      
      // Guardar posiciones iniciales
      const initialPositions = Array.from(elements).map(el => 
        el.getBoundingClientRect().top + window.scrollY
      );
      
      // Aplicar estilos iniciales
      elements.forEach(el => {
        this.renderer.setStyle(el, 'will-change', 'transform');
        this.renderer.setStyle(el, 'transition', 'transform 0.1s linear');
      });
      
      const applyParallax = () => {
        const scrollPosition = window.scrollY;
        
        elements.forEach((el, index) => {
          const elementPosition = el.getBoundingClientRect().top;
          const initialY = initialPositions[index];
          
          // Solo aplicar si está en el viewport
          if (elementPosition < window.innerHeight && elementPosition > -el.clientHeight) {
            let translateValue = 0;
            
            if (direction === 'up') {
              translateValue = (scrollPosition - initialY) * ratio * -1;
            } else {
              translateValue = (scrollPosition - initialY) * ratio;
            }
            
            this.renderer.setStyle(
              el,
              'transform',
              `translateY(${translateValue}px)`
            );
          }
        });
      };
      
      // Aplicar efecto al hacer scroll
      window.addEventListener('scroll', applyParallax);
      window.addEventListener('resize', applyParallax);
      
      // Aplicar inicialmente
      applyParallax();
    }, 100);
  }
}