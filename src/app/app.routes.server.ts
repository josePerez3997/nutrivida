import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Client,  // Cambia a RenderMode.Hydrate para mejorar la carga de estilos
  }
];