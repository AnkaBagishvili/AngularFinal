import { Component } from '@angular/core';
import { Product } from '../../helpers/inferfaces/product.interfaces';
import { ProductService } from '../../helpers/services/product.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {
  productList: Product[] = [];
  openForm: boolean = false;
  constructor(public _productService: ProductService) {
    this.productList = this._productService.getProducts();
  }
  add() {}
  deleteItem(id: number) {
    setTimeout(() => {
      this._productService.deleteItemById(id);
      alert(`Product (id: ${id}) has deleted`);
    }, 1000);
  }
}
