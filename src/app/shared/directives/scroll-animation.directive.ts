import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true
})
export class ScrollAnimationDirective implements OnInit {
  @Input() animationClass: string = 'active';
  @Input() offset: number = 150;
  
  private hasAnimated: boolean = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    // Verificar si el elemento está visible al cargar la página - solo en navegador
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.checkIfInView();
      }, 100);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    // Si el elemento ya se ha animado, no hacer nada
    if (!this.hasAnimated && isPlatformBrowser(this.platformId)) {
      this.checkIfInView();
    }
  }
  
  private checkIfInView(): void {
    // Asegurarse de que estemos en un navegador antes de acceder a window
    if (!isPlatformBrowser(this.platformId)) return;
    
    const windowHeight = window.innerHeight;
    const elementPosition = this.el.nativeElement.getBoundingClientRect().top;
    
    // Si el elemento está en el viewport (considerando el offset)
    if (elementPosition < windowHeight - this.offset) {
      this.renderer.addClass(this.el.nativeElement, this.animationClass);
      this.hasAnimated = true;
    }
  }
}