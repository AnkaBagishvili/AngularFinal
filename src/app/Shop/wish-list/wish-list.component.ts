import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss',
  standalone: true,
  imports: [CommonModule],
})
export class WishListComponent implements OnInit {
  wishlistItems: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadWishlist();
  }

  loadWishlist(): void {
    this.http
      .get<any[]>('https://api.example.com/wishlist')
      .subscribe((items) => (this.wishlistItems = items));
  }

  removeFromWishlist(itemId: number): void {
    this.http
      .delete(`https://api.example.com/wishlist/${itemId}`)
      .subscribe(() => {
        this.wishlistItems = this.wishlistItems.filter(
          (item) => item.id !== itemId
        );
      });
  }
}
