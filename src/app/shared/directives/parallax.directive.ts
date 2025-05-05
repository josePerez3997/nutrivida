import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appParallax]',
  standalone: true
})
export class ParallaxDirective implements OnInit {
  @Input() ratio: number = 0.3;
  @Input() direction: 'up' | 'down' = 'up';
  
  private initialOffset: number = 0;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    // Aplicar estilo inicial solo en el navegador
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.setStyle(this.el.nativeElement, 'will-change', 'transform');
      this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.1s linear');
      
      // Inicializar el offset inicial
      this.initialOffset = this.el.nativeElement.getBoundingClientRect().top;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    // Solo ejecutar en el navegador
    if (!isPlatformBrowser(this.platformId)) return;
    
    const elementPosition = this.el.nativeElement.getBoundingClientRect().top;
    const scrollPosition = window.scrollY;
    
    // Solo aplicar efecto si el elemento está visible en el viewport
    if (elementPosition < window.innerHeight && elementPosition > -this.el.nativeElement.clientHeight) {
      let translateValue = 0;
      
      if (this.direction === 'up') {
        translateValue = (scrollPosition - this.initialOffset) * this.ratio * -1;
      } else {
        translateValue = (scrollPosition - this.initialOffset) * this.ratio;
      }
      
      this.renderer.setStyle(
        this.el.nativeElement,
        'transform',
        `translateY(${translateValue}px)`
      );
    }
  }
}