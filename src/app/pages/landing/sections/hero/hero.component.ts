import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  // URL para el botón de consultas
  consultationUrl = '#contact';
  
  // URL para el botón de productos
  productsUrl = '#products';

  constructor() { }

  ngOnInit(): void {
  }

  // Método para desplazamiento suave a las secciones
  scrollToSection(sectionId: string): void {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}