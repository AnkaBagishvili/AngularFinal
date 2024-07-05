// import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
// import { FormControl, ReactiveFormsModule } from '@angular/forms';
// import { ProductService } from '../../../helpers/services/product.service';
// import { debounceTime, filter, map, switchMap } from 'rxjs';

// @Component({
//   selector: 'app-search',
//   standalone: true,
//   templateUrl: './search.component.html',
//   styleUrls: ['./search.component.scss'],
//   imports: [ReactiveFormsModule],
// })
// export class SearchComponent implements AfterViewInit {
//   searchInput = new FormControl('');
//   productList: any[] = [];

//   constructor(private _productService: ProductService) {}

//   ngAfterViewInit(): void {
//     this.searchInput.valueChanges
//       .pipe(
//         debounceTime(1000),
//         map((value) => value.trim()),
//         filter((value) => value.length > 2),
//         switchMap((value) => this._productService.searchProduct(value))
//       )
//       .subscribe((result) => {
//         this.productList = result;
//       });
//   }
// }
