
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {

  data: Product[] = [
    { id: 0, name: 'Dikilana', price: 10, amount: 1 },
    { id: 1, name: 'Half Kop', price: 30, amount: 1 },
    { id: 2, name: 'Steak & Pap', price: 50, amount: 1 },
    { id: 3, name: 'Salad', price: 12, amount: 1 },
    { id: 4, name: 'Samosa', price: 20, amount: 1 },
    { id: 5, name: 'Spathlo + cold drink', price: 40, amount: 1 },
    { id: 6, name: 'Kasi Platter Mix', price: 150, amount: 1 },
    { id: 7, name: 'Nqombhothi 2Litre', price: 8, amount: 1 },
    { id: 8, name: 'Soda', price: 15, amount: 1 },
    { id: 9, name:'Cold Drink', price: 20, amount: 1 },
    { id: 10, name: 'Pancakes', price: 35, amount: 1 },
    { id: 11, name: 'Beef&Wors', price: 40, amount: 1 },
    { id: 12, name: 'Chips', price: 25, amount: 1 },
    { id: 13, name: 'Marapo', price: 35, amount: 1 },
    { id: 14, name: 'Kota 2', price: 30, amount: 1 },
  ];     

  public cart = [];
  public cartItemCount = new BehaviorSubject(0);

  constructor() {}

  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  addProduct(product) {
    let added = false;
    for (const p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
    this.getCartItemCount();
  }

  decreaseProduct(product) {
    for (const [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount === 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product) {
    for (const [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }

  clearCart() {
    this.cart.length = 0;
  }

  extraProd(product: any) {
   throw new Error('Method not implemented.');
    }
}
