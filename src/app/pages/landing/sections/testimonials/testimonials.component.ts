import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../../../shared/directives/scroll-animation.directive';

interface Testimonial {
  id: number;
  content: string;
  name: string;
  image: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [
    {
      id: 1,
      content: "Después de meses sufriendo problemas digestivos, Nutrivida me ofreció un diagnóstico preciso y un tratamiento natural que cambió mi vida. Sus suplementos son de excelente calidad.",
      name: "María García",
      image: "assets/images/testimonials/person-1.jpg",
      rating: 5
    },
    {
      id: 2,
      content: "La tecnología de diagnóstico que utilizan es impresionante. En una sola visita detectaron problemas que no había podido resolver en años. Los tratamientos son efectivos y totalmente naturales.",
      name: "Carlos Rodríguez",
      image: "assets/images/testimonials/person-2.jpg",
      rating: 5
    },
    {
      id: 3,
      content: "Los profesionales de Nutrivida realmente se preocupan por tu bienestar. Su atención personalizada y seguimiento constante hacen toda la diferencia. Recomiendo especialmente sus tés detox.",
      name: "Laura Méndez",
      image: "assets/images/testimonials/person-3.jpg",
      rating: 4
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  
}