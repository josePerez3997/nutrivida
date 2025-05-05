import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../../../shared/directives/scroll-animation.directive';
import { ConsultationService, Service } from '../../../../core/services/consultation.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {
  services: Service[] = [];

  constructor(private consultationService: ConsultationService) { }

  ngOnInit(): void {
    this.loadServices();
  }

  private loadServices(): void {
    this.consultationService.getServices().subscribe(
      (services) => {
        this.services = services;
      }
    );
  }
  
  // Método para obtener la clase de icono según el nombre
  getIconClass(iconName: string): string {
    switch (iconName) {
      case 'clipboard-list':
        return 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01';
      case 'user':
        return 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z';
      case 'database':
        return 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4';
      default:
        return '';
    }
  }
  
  // Método para obtener la clase de gradiente según el color
  getGradientClass(color: string): string {
    switch (color) {
      case 'primary':
        return 'from-primary to-primary-dark';
      case 'secondary':
        return 'from-secondary-dark to-secondary';
      case 'accent':
        return 'from-accent to-accent-dark';
      default:
        return 'from-primary to-primary-dark';
    }
  }
}