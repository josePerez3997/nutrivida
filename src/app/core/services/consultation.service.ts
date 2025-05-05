import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Service {
  id: number;
  name: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
}

export interface Consultation {
  id: number;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  constructor() { }
  
  // Obtener servicios ofrecidos
  getServices(): Observable<Service[]> {
    return of([
      {
        id: 1,
        name: 'Evaluación Integral',
        description: 'Análisis completo de tu estado de salud utilizando tecnología de vanguardia para diagnósticos precisos.',
        icon: 'clipboard-list',
        features: [
          'Análisis bioenergético',
          'Evaluación nutricional',
          'Diagnóstico detallado'
        ],
        color: 'primary'
      },
      {
        id: 2,
        name: 'Consultas Personalizadas',
        description: 'Atención individualizada con especialistas en medicina natural que desarrollan tratamientos específicos.',
        icon: 'user',
        features: [
          'Tratamientos personalizados',
          'Seguimiento continuo',
          'Orientación nutricional'
        ],
        color: 'accent'
      },
      {
        id: 3,
        name: 'Productos Naturales',
        description: 'Ofrecemos una amplia gama de productos naturales de alta calidad para complementar tu tratamiento.',
        icon: 'database',
        features: [
          'Suplementos naturales',
          'Remedios herbales',
          'Productos orgánicos certificados'
        ],
        color: 'secondary'
      }
    ]);
  }
  
  // Enviar solicitud de consulta
  sendConsultation(consultation: Omit<Consultation, 'id' | 'date'>): Observable<boolean> {
    // En un caso real, aquí se enviaría la consulta a un backend
    console.log('Enviando consulta:', consultation);
    
    // Simulamos una respuesta exitosa
    return of(true);
  }
  
  // Opciones para el formulario de contacto
  getContactSubjects(): Observable<string[]> {
    return of([
      'Agenda una consulta',
      'Solicitar evaluación',
      'Información sobre productos',
      'Otro asunto'
    ]);
  }
}