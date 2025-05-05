import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { ServicesComponent } from './sections/services/services.component';
import { ProductsComponent } from './sections/products/products.component';
import { TestimonialsComponent } from './sections/testimonials/testimonials.component';
import { ContactComponent } from './sections/contact/contact.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    ProductsComponent,
    TestimonialsComponent,
    ContactComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  
  ngOnInit(): void {
    // Inicializar las animaciones de scroll solo en el navegador
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.initScrollAnimations();
      }, 100);
    }
  }
  
  // Método para inicializar las animaciones basadas en scroll
  private initScrollAnimations(): void {
    if (isPlatformBrowser(this.platformId)) {
      const revealElements = document.querySelectorAll('.reveal');
      
      const revealOnScroll = () => {
        for (let i = 0; i < revealElements.length; i++) {
          const windowHeight = window.innerHeight;
          const elementTop = revealElements[i].getBoundingClientRect().top;
          const elementVisible = 150;
          
          if (elementTop < windowHeight - elementVisible) {
            revealElements[i].classList.add('active');
          } else {
            revealElements[i].classList.remove('active');
          }
        }
      };
      
      window.addEventListener('scroll', revealOnScroll);
      // Trigger initial check
      revealOnScroll();
    }
  }
}