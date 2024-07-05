import { Component } from '@angular/core';
import { HeaderMenuComponent } from './header-menu/header-menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [HeaderMenuComponent],
})
export class HeaderComponent {
  // productList: Product[] = [];
  openForm: boolean = false;
  constructor() {
    // private _cartService: CartService // private _notification: NotificationService, // public _productService: ProductService, // private _paginatorService: PaginationService,
    // this._paginatorService.currentPage$
    //   .pipe(
    //     switchMap((page) =>
    //       this._productService.getProducts(30, 30 * (page - 1))
    //     )
    //   )
    //   .subscribe((result) => {
    //     this.productList = result;
    //   });
  }
}
