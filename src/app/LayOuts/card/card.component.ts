import {
  Component,
  EventEmitter,
  Input,
  Output,
  TrackByFunction,
  inject,
} from '@angular/core';
import { Product } from '../../helpers/inferfaces/product.interfaces';
import { ProductService } from '../../helpers/services/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input({ required: true }) product!: Product;
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();
  service = inject(ProductService);
  productList: any;
  trackByProductId!: TrackByFunction<any>;
  wishlistService: any;
  wishlistItems: any[] = [];

  addToWishlist(productId: number): void {
    if (this.isInWishlist(productId)) {
      this.wishlistService.removeFromWishlist(productId).subscribe(() => {
        this.wishlistItems = this.wishlistItems.filter(
          (item: { id: number }) => item.id !== productId
        );
      });
    } else {
      this.wishlistService.addToWishlist(productId).subscribe((item: any) => {
        this.wishlistItems.push(item);
      });
    }
  }

  isInWishlist(productId: number): boolean {
    return this.wishlistItems.some(
      (item: { id: number }) => item.id === productId
    );
  }
}
