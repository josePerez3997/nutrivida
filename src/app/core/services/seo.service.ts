import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

interface MetaTags {
    title: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
}

@Injectable({
    providedIn: 'root'
})
export class SeoService {
    private readonly defaultDescription = 'Centro de salud y medicina natural con tecnología de vanguardia para mejorar tu calidad de vida';
    private readonly siteName = 'Nutrivida - Centro de Salud y Medicina Natural';
    private readonly defaultImage = 'assets/images/logo.png';

    constructor(
        private meta: Meta,
        private title: Title,
        @Inject(PLATFORM_ID) private platformId: Object
    ) { }

    updateTitle(title: string): void {
        this.title.setTitle(`${this.siteName}`);
    }

    updateMetaTags(tags: MetaTags): void {
        const description = tags.description || this.defaultDescription;
        const image = tags.image || this.defaultImage;
        const url = tags.url || (isPlatformBrowser(this.platformId) ? window.location.href : '');
        const type = tags.type || 'website';

        // Meta tags básicos
        this.meta.updateTag({ name: 'description', content: description });

        // Canonical URL
        this.meta.updateTag({ rel: 'canonical', href: url });

        // Open Graph tags
        this.meta.updateTag({ property: 'og:title', content: tags.title });
        this.meta.updateTag({ property: 'og:description', content: description });
        this.meta.updateTag({ property: 'og:image', content: image });
        this.meta.updateTag({ property: 'og:url', content: url });
        this.meta.updateTag({ property: 'og:type', content: type });
        this.meta.updateTag({ property: 'og:site_name', content: this.siteName });

        // Twitter tags
        this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
        this.meta.updateTag({ name: 'twitter:title', content: tags.title });
        this.meta.updateTag({ name: 'twitter:description', content: description });
        this.meta.updateTag({ name: 'twitter:image', content: image });
    }

    // Generador de Schema.org para negocio local
    getLocalBusinessSchema(): string {
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'MedicalBusiness',
            name: 'Nutrivida - Centro de Salud y Medicina Natural',
            description: this.defaultDescription,
            image: this.defaultImage,
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Av. Salud Natural 123, Colonia Bienestar',
                addressLocality: 'Ocaña',
                addressRegion: 'Norte de Santander',
                postalCode: '548010',
                addressCountry: 'CO'
            },
            geo: {
                '@type': 'GeoCoordinates',
                latitude: '8.235662580826988',
                longitude: '-73.35529262551438'
            },
            telephone: '+123456789',
            url: 'https://nutrivida.com',
            openingHoursSpecification: [
                {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                    opens: '09:00',
                    closes: '19:00'
                },
                {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Saturday'],
                    opens: '09:00',
                    closes: '14:00'
                }
            ],
            priceRange: '$$'
        };

        return JSON.stringify(schema);
    }

    // Generador de Schema.org para productos
    getProductSchema(product: any): string {
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: product.name,
            description: product.description,
            image: product.image,
            offers: {
                '@type': 'Offer',
                price: product.price,
                priceCurrency: 'COP',
                availability: 'https://schema.org/InStock'
            },
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: product.rating,
                reviewCount: product.reviews
            }
        };

        return JSON.stringify(schema);
    }
}