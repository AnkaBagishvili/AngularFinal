import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
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
}
