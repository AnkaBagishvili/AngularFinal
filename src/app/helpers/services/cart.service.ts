import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'https://api.example.com/cart'; //Chemi API maqvs chasasvami

  constructor(private http: HttpClient) {}

  getCartItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/items`);
  }

  updateCartItem(id: number, quantity: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/items/${id}`, { quantity });
  }

  removeCartItem(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/items/${id}`);
  }
}
