import { Component, Input, SimpleChange, SimpleChanges, inject, signal } from '@angular/core';
import { ProductComponent } from '@/products/components/product/product.component'
import { Product } from '@/shared/models/product.model';
import { HeaderComponent } from '@/shared/components/header/header.component';
import { CartService } from '@/shared/services/cart.service';
import { ProductService } from '@/shared/services/product.service';
import { CategoryService } from '@/shared/services/category.service';
import { Category } from '@/shared/models/category.model';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent ,RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export default class ListComponent {
  products = signal<Product[]>([]);
  cart = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  private cartService = inject(CartService);
  private productsService = inject(ProductService);
  private categoryService = inject(CategoryService);
  @Input () category_id?: string;

  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.getCategories();
  }
  ngOnChanges(changes:SimpleChanges) {
    this.getProducts();
  }
  private getProducts() {
    this.productsService.getProducts(this.category_id).subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  private getCategories() {
    this.categoryService.getCategories().subscribe({
      next: (data) => {
        this.categories.set(data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  addToCard(event: Product) {
    this.cartService.addTocard(event);
  }
}
