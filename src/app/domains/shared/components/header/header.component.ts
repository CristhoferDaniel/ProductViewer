import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
//import { Product } from '../../models/product.model';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '@/shared/services/cart.service';
import { RouterLinkWithHref , RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CurrencyPipe, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  // total = signal(0);
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;

  // getTotalPrice() {
  //   console.log(this.cart);
  //   return this.cart.reduce((total, product) => total + product.price, 0);
  // }

  // ngOnChanges(changes:SimpleChanges){
  //   const cart = changes['cart'];
  //   if(cart){
  //     this.total.set(this.getTotalPrice());
  //   }

  // }

  toogleSideMenu() {
    this.hideSideMenu.update((prevState) => !prevState);
  }
}
