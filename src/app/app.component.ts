import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { WhatsappButtonComponent } from './shared/components/whatsapp-button/whatsapp-button.component';
import { SeoService } from './core/services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    WhatsappButtonComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Nutrivida - Centro de Salud y Medicina Natural';

  constructor(
    private seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Configuración básica del SEO global
    this.setupSeo();
  }

  private setupSeo(): void {
    // Actualizar título y meta tags generales
    this.seoService.updateTitle('Centro de Salud y Medicina Natural');
    this.seoService.updateMetaTags({
      title: 'Centro de Salud y Medicina Natural',
      description: 'Nutrivida te hace mejor la vida. Centro de salud y medicina natural con tecnología de vanguardia para mejorar tu calidad de vida con diagnósticos precisos.',
      type: 'website'
    });

    // Añadir schema.org para negocio local
    if (isPlatformBrowser(this.platformId)) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = this.seoService.getLocalBusinessSchema();
      document.head.appendChild(script);
    }
  }
}
