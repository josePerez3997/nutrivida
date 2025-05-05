import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../../../shared/directives/scroll-animation.directive';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  // Características destacadas
  features: Feature[] = [
    {
      icon: 'flask',
      title: 'Diagnósticos Precisos',
      description: 'Tecnología avanzada para resultados exactos'
    },
    {
      icon: 'book',
      title: 'Experiencia',
      description: 'Años de trayectoria en medicina natural'
    },
    {
      icon: 'user',
      title: 'Atención Personalizada',
      description: 'Tratamientos adaptados a cada paciente'
    },
    {
      icon: 'shield',
      title: 'Productos Naturales',
      description: 'Suplementos y remedios de alta calidad'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // Método para obtener la clase de icono según el nombre
  getIconClass(iconName: string): string {
    switch (iconName) {
      case 'flask':
        return 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z';
      case 'book':
        return 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253';
      case 'user':
        return 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z';
      case 'shield':
        return 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z';
      default:
        return '';
    }
  }
}