import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  category: string;
  tag?: string;
  rating: number;
  reviews: number;
  bestseller: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  // Categorías de productos
  getCategories(): Observable<string[]> {
    return of(['Todos', 'Suplementos', 'Hierbas Medicinales', 'Productos Orgánicos']);
  }

  // Obtener todos los productos
  getProducts(): Observable<Product[]> {
    return of([
      {
        id: 1,
        name: 'Ensueño',
        price: 29.99,
        description: 'Medicamento homeopático ideal para todas aquellas personas que no pueden conciliar un sueño reparador.',
        image: 'assets/images/producto-1.webp',
        category: '',
        tag: 'Nuevo',
        rating: 5,
        reviews: 120,
        bestseller: false
      },
      {
        id: 2,
        name: 'Tensión full y Diabetizan',
        price: 19.99,
        description: 'Medicamentos homeopáticos para todas aquellas personas que sufren de azúcar en sangre y de hipertensión arterial.',
        image: 'assets/images/producto-2.webp',
        category: '',
        tag: 'Nuevo',
        rating: 4,
        reviews: 85,
        bestseller: false
      },
      {
        id: 3,
        name: 'Fibra Vegetal PLUS',
        price: 39.99,
        description: 'Desintoxicante natural que limpia tu sistema digestivo.',
        image: 'assets/images/producto-4.webp',
        category: '',
        tag: 'Nuevo',
        rating: 5,
        reviews: 138,
        bestseller: false
      },
      {
        id: 4,
        name: 'Perfect VISION',
        price: 50.000,
        description: 'Gotas que mejoran la visión.',
        image: 'assets/images/producto-3.webp',
        category: '',
        tag: 'Nuevo',
        rating: 4,
        reviews: 94,
        bestseller: false
      }
    ]);
  }

  // Obtener productos por categoría
  getProductsByCategory(category: string): Observable<Product[]> {
    if (category === 'Todos') {
      return this.getProducts();
    }

    return new Observable<Product[]>(observer => {
      this.getProducts().subscribe(products => {
        const filteredProducts = products.filter(product => product.category === category);
        observer.next(filteredProducts);
        observer.complete();
      });
    });
  }

  // Obtener un producto por su ID
  getProductById(id: number): Observable<Product | undefined> {
    return new Observable<Product | undefined>(observer => {
      this.getProducts().subscribe(products => {
        const product = products.find(p => p.id === id);
        observer.next(product);
        observer.complete();
      });
    });
  }
}