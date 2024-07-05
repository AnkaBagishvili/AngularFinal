import { Component } from '@angular/core';
import { CartService } from '../../helpers/services/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class CartComponent {
  cartItems: any[] = [];
  subtotal: number = 0;
  tax: number = 0;
  shipping: number = 15; // Default shipping cost
  grandTotal: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
      this.calculateTotals();
    });
  }

  updateQuantity(item: any): void {
    this.cartService.updateCartItem(item.id, item.quantity).subscribe(() => {
      this.calculateTotals();
    });
  }

  removeProduct(id: number): void {
    this.cartService.removeCartItem(id).subscribe(() => {
      this.cartItems = this.cartItems.filter((item) => item.id !== id);
      this.calculateTotals();
    });
  }

  calculateTotals(): void {
    this.subtotal = this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    this.tax = this.subtotal * 0.05; // Assuming 5% tax rate
    this.grandTotal = this.subtotal + this.tax + this.shipping;
  }
}
