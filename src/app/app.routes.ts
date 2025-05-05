import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    title: 'Nutrivida - Centro de Salud y Medicina Natural'
  },
  { 
    path: '**', 
    redirectTo: '',
    pathMatch: 'full'
  }
];
