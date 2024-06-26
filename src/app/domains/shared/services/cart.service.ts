import { Injectable ,computed,signal } from '@angular/core';
import { Product } from '@/shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([]);
  total = computed(() => {
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price, 0);
  })

  constructor() {}
  addTocard(product: Product) {
    console.log('addTocard', product);
    this.cart.update((prev) => [...prev, product]);
  }

}
