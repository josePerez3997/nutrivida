import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  // Enlaces rápidos para el footer
  quickLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Productos', href: '#products' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'Contacto', href: '#contact' }
  ];
  
  // Servicios para el footer
  services = [
    { name: 'Evaluación Integral', href: '#services' },
    { name: 'Consultas Personalizadas', href: '#services' },
    { name: 'Diagnóstico Bioenergético', href: '#services' },
    { name: 'Tratamientos Naturales', href: '#services' },
    { name: 'Productos Naturales', href: '#products' },
    { name: 'Asesoría Nutricional', href: '#services' }
  ];
  
  // Redes sociales
  socialMedia = [
    { name: 'Facebook', icon: 'facebook', url: '#' },
    { name: 'Instagram', icon: 'instagram', url: '#' },
    { name: 'Twitter', icon: 'twitter', url: '#' },
    { name: 'YouTube', icon: 'youtube', url: '#' }
  ];
}