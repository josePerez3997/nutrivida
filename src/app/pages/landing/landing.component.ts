import { Component, OnInit, Inject, PLATFORM_ID, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { ServicesComponent } from './sections/services/services.component';
import { ProductsComponent } from './sections/products/products.component';
import { TestimonialsComponent } from './sections/testimonials/testimonials.component';
import { ContactComponent } from './sections/contact/contact.component';
import { SeoService } from '../../core/services/seo.service';

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
export class LandingComponent implements OnInit, OnInit, AfterViewInit, OnDestroy {
  private observer: IntersectionObserver | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private seoService: SeoService) { }

  ngOnInit(): void {
    this.setupSeo();
    // Inicializar las animaciones de scroll solo en el navegador
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.initScrollAnimations();
      }, 100);
    }
  }

  ngAfterViewInit(): void {
    // Inicializar observador de secciones para cambiar metadatos según sección visible
    if (isPlatformBrowser(this.platformId)) {
      this.observeSections();
    }
  }

  ngOnDestroy(): void {
    if (this.observer && isPlatformBrowser(this.platformId)) {
      this.observer.disconnect();
      this.observer = null;
    }
  }

  private setupSeo(): void {
    this.seoService.updateTitle('Centro de Salud y Medicina Natural en Ocaña');
    this.seoService.updateMetaTags({
      title: 'Centro de Salud y Medicina Natural en Ocaña',
      description: 'Nutrivida te hace mejor la vida. Diagnósticos precisos con tecnología de vanguardia y tratamientos naturales personalizados para mejorar tu calidad de vida.',
      image: 'assets/images/hero-bg.jpg'
    });
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
      revealOnScroll();
    }
  }

  private observeSections(): void {
    const sections = document.querySelectorAll('section[id]');
    if (!sections.length) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6 // 60% visible para considerarse como la sección activa
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Obtener el ID de la sección
          const sectionId = entry.target.getAttribute('id');
          if (!sectionId) return;

          // Actualizar URL con fragmento sin recargar página
          const newUrl = window.location.pathname + window.location.search + '#' + sectionId;
          window.history.replaceState(null, '', newUrl);

          // Actualizar metadatos según la sección visible
          this.updateSeoBySection(sectionId);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      this.observer?.observe(section);
    });
  }

  private updateSeoBySection(sectionId: string): void {
    switch (sectionId) {
      case 'home':
        this.seoService.updateMetaTags({
          title: 'Centro de Salud y Medicina Natural en Ocaña',
          description: 'Nutrivida te hace mejor la vida. Centro especializado en medicina natural con tecnología avanzada para mejorar tu calidad de vida.'
        });
        break;
      case 'about':
        this.seoService.updateMetaTags({
          title: 'Sobre Nutrivida - Centro de Medicina Natural',
          description: 'Somos un centro especializado en salud y medicina natural, comprometidos con mejorar la calidad de vida de nuestros pacientes con métodos naturales y tecnología de vanguardia.'
        });
        break;
      case 'services':
        this.seoService.updateMetaTags({
          title: 'Servicios de Medicina Natural y Diagnóstico',
          description: 'Evaluaciones integrales, consultas personalizadas y diagnósticos bioenergéticos con tecnología de vanguardia para mejorar tu salud.'
        });
        break;
      case 'products':
        this.seoService.updateMetaTags({
          title: 'Productos Naturales de Alta Calidad',
          description: 'Suplementos, hierbas medicinales y productos orgánicos certificados para complementar tu tratamiento natural y mejorar tu bienestar.'
        });
        break;
      case 'testimonials':
        this.seoService.updateMetaTags({
          title: 'Testimonios de Pacientes - Nutrivida',
          description: 'Conoce las experiencias de nuestros pacientes que han mejorado su calidad de vida con nuestros servicios y productos naturales.'
        });
        break;
      case 'contact':
        this.seoService.updateMetaTags({
          title: 'Contacto - Agendar Consulta en Nutrivida',
          description: 'Agenda tu evaluación o consulta en Nutrivida. Estamos aquí para ayudarte a mejorar tu salud con métodos naturales y diagnósticos precisos.'
        });
        break;
    }
  }
}