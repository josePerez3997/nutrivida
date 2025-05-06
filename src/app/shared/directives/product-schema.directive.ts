// src/app/shared/directives/product-schema.directive.ts
import { Directive, Input, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';

@Directive({
  selector: '[appProductSchema]',
  standalone: true  // Importante: asegura que sea standalone
})
export class ProductSchemaDirective implements OnInit {
  @Input('appProductSchema') product: any;  // Corregido para enlazar correctamente

  constructor(
    private seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId) && this.product) {
      // Crear y añadir schema.org para el producto
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = this.seoService.getProductSchema(this.product);
      document.head.appendChild(script);
    }
  }
}