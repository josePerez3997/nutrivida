import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    data: {
      seo: {
        title: 'Nutrivida - Centro de Salud y Medicina Natural',
        description: 'Nutrivida te hace mejor la vida. Diagnósticos precisos con tecnología de vanguardia y tratamientos naturales personalizados para mejorar tu calidad de vida.',
        keywords: 'centro de salud natural, medicina natural, diagnóstico bioenergético, Ocaña, Norte de Santander',
        image: 'assets/images/hero-bg.jpg'
      }
    }
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
