import { Product } from '@/shared/models/product.model';
import { ProductService } from '@/shared/services/product.service';
import { Component, Input, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanitizeImageUrlPipe } from '@/shared/pipes/sanitize-image-url.pipe';
import { CartService } from '@/shared/services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, SanitizeImageUrlPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export default class ProductDetailComponent {
  @Input() id?: string;
  private productService = inject(ProductService);
  private cartService = inject(CartService);
  product = signal<Product | null>(null);
  cover = signal('');
  ngOnInit() {
    if (this.id) {
      this.productService.getProductById(this.id).subscribe({
        next: (product) => {
          this.product.set(product);
          if (product.images.length > 0) {
            this.cover.set(product.images[0]);
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
  changeCover(newImage: string) {
    this.cover.set(newImage);
  }
  addToCart() {
    const product = this.product();
    if (product) {
      this.cartService.addTocard(product);
    }
  }
}
