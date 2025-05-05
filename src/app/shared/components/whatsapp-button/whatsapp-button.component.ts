import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.scss'
})
export class WhatsappButtonComponent {
  // Número de WhatsApp de la empresa
  whatsappNumber = '+123456789';
  
  // Mensaje predeterminado
  defaultMessage = 'Hola, me gustaría obtener más información sobre Nutrivida';

  // Método para construir la URL de WhatsApp
  getWhatsappUrl(): string {
    const encodedMessage = encodeURIComponent(this.defaultMessage);
    return `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
  }
}