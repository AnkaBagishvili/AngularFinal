import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private apiUrl = 'https://api.example.com/wishlist';
  constructor(private http: HttpClient) {}
  getWishlist(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addToWishlist(productId: number): Observable<any> {
    return this.http.post<any>(this.apiUrl, { id: productId });
  }

  removeFromWishlist(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${productId}`);
  }
}
