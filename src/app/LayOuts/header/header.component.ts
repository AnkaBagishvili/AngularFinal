import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, fromEvent, map, switchMap } from 'rxjs';
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
  searchInput = new FormControl('');
  @ViewChild('search') search!: ElementRef<HTMLInputElement>;

  ngAfterViewInit(): void {
    fromEvent(this.search.nativeElement, 'keyup').pipe(
      debounceTime(1000),
      map((event) => (event.target as HTMLInputElement).value),
      filter((value) => value.length > 2)
      // switchMap((key) => this._productService.searchProduct(key as string))
    );
    // .subscribe((result) => (this.productList = result));
  }
}
