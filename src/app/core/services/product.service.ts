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
        name: 'Suplemento Multivitamínico',
        price: 29.99,
        description: 'Complejo de vitaminas y minerales 100% natural para fortalecer tu sistema inmunológico.',
        image: 'assets/images/product-1.jpg',
        category: 'Suplementos',
        tag: 'Bestseller',
        rating: 5,
        reviews: 120,
        bestseller: true
      },
      {
        id: 2,
        name: 'Té Detox Herbal',
        price: 19.99,
        description: 'Mezcla de hierbas para depurar el organismo y mejorar tu digestión de forma natural.',
        image: 'assets/images/product-2.png',
        category: 'Hierbas Medicinales',
        tag: 'Nuevo',
        rating: 4,
        reviews: 85,
        bestseller: false
      },
      {
        id: 3,
        name: 'Aceites Esenciales Set',
        price: 39.99,
        description: 'Set de aceites esenciales 100% puros para aromaterapia y bienestar emocional.',
        image: 'assets/images/product-3.jpg',
        category: 'Productos Orgánicos',
        rating: 5,
        reviews: 138,
        bestseller: false
      },
      {
        id: 4,
        name: 'Omega 3-6-9 Natural',
        price: 80.000,
        originalPrice: 85.000,
        description: 'Suplemento de ácidos grasos esenciales de origen vegetal para la salud cardiovascular.',
        image: 'assets/images/product-4.jpg',
        category: 'Suplementos',
        tag: 'Oferta',
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