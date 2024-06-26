import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@/shared/models/product.model';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '@/shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@/shared/pipes/time-ago.pipe';
import { SanitizeImageUrlPipe } from '@/shared/pipes/sanitize-image-url.pipe';
import { RouterLinkWithHref } from '@angular/router';

@Component({

  selector: 'app-product',
  standalone: true,
  imports: [CommonModule , ReversePipe, TimeAgoPipe , SanitizeImageUrlPipe, RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input({ required: true }) Product!: Product;
  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    //console.log('add');

    this.addToCart.emit(this.Product);
  }
}
