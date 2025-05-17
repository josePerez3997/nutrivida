import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../../../shared/directives/scroll-animation.directive';
import { ProductSchemaDirective } from '../../../../shared/directives/product-schema.directive';
import { ProductService, Product } from '../../../../core/services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective, ProductSchemaDirective],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  categories: string[] = [];
  selectedCategory: string = 'Todos';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadCategories();
    this.loadProducts();
  }

  // Cargar categorías de productos
  private loadCategories(): void {
    this.productService.getCategories().subscribe(
      (categories) => {
        this.categories = categories;
      }
    );
  }

  // Cargar productos
  private loadProducts(): void {
    this.productService.getProducts().subscribe(
      (products) => {
        this.products = products;
      }
    );
  }

  // Filtrar productos por categoría
  filterByCategory(category: string): void {
    this.selectedCategory = category;

    if (category === 'Todos') {
      this.loadProducts();
    } else {
      this.productService.getProductsByCategory(category).subscribe(
        (products) => {
          this.products = products;
        }
      );
    }
  }

  // Método para obtener la clase de badge según el tag
  getBadgeClass(tag: string | undefined): string {
    if (!tag) return '';

    switch (tag) {
      case 'Bestseller':
        return 'bg-primary text-white';
      case 'Nuevo':
        return 'bg-secondary text-gray-800';
      case 'Oferta':
        return 'bg-accent text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  }

  buyProduct(product: Product) {
    console.log('Comprando producto:', product);
  }

}