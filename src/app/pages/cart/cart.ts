import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class CartComponent {

  cart: any[] = [];

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
  }

  removeItem(index: number) {
    this.cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getTotal() {
    return this.cart.reduce((sum, item) => sum + item.totalCost, 0);
  }
}
