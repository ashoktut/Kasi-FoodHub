// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// export interface Product {
//   amount: number;
//   id: number;
//   name: string;
//   price: number;
//   qty: number;
// }
// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {

//   constructor() {}

//   // tslint:disable-next-line: member-ordering
//   data: Product[] = [
//     { id: 0, name: 'Dikilana', price: 15, qty: 0 },
//     { id: 1, name: 'Half Kop', price: 30, qty: 0 },
//     { id: 2, name: 'Steak & Pap', price: 50, qty: 0 },
//     { id: 3, name: 'Salad', price: 15, qty: 0 },
//     { id: 4, name: 'Samoosa', price: 10, qty: 0 },
//     { id: 5, name: 'Spathlo + cold drink', price: 40, qty: 0 },
//     { id: 6, name: 'Kasi Platter Mix', price: 150, qty: 0 },
//     { id: 7, name: 'Nqombhothi 2Litre', price: 8, qty: 0 },
//     { id: 8, name: 'Cold Drink', price: 20, qty: 0 },
//     { id: 9, name: 'Chips', price: 50, qty: 0 }
//   ];

//   // tslint:disable-next-line: member-ordering
//   public cart = [];
//   public cartItemCount = new BehaviorSubject(0);
//   getItems() {
//     // tslint:disable-next-line: quotemark
//   //  throw new Error("Method not implemented.");
//   return 'senseimahlangu finger guitars';
//   }
//   getExt(): any[] {
//     // tslint:disable-next-line: quotemark
//     throw new Error("Method not implemented.");
//   }
//   extraProd(product: any) {
//     // tslint:disable-next-line: quotemark
//     throw new Error("Method not implemented.");
//   }

//   getProducts() {
//     return this.data;
//   }
//   getCart() {
//     return this.cart;
//   }

//   getCartItemCount() {

//     return this.cartItemCount;

//   }

//   addProduct(product) {
//     let added = false;
//     for (const p of this.cart) {
//       if (p.id === product.id) {
//         p.qty += 1;
//         added = true;
//         break;
//       }
//     }
//     if (!added) {
//       this.cart.push(product);
//     }
//     this.cartItemCount.next(this.cartItemCount.value + 1);
//     this.getCartItemCount();
//   }

//   decreaseProduct(product) {
//     for (const [index, p] of this.cart.entries()) {
//       if (p.id === product.id) {
//         p.qty -= 1;
//         if (p.qty === 0) {
//           this.cart.splice(index, 1);
//           // p.qty = 0;
//         }
//       }
//     }
//     this.cartItemCount.next(this.cartItemCount.value - 1);
//     this.getCartItemCount();
//   }

//   removeProduct(product) {
//     for (const [index, p] of this.cart.entries()) {
//       if (p.id === product.id) {
//         this.cartItemCount.next(this.cartItemCount.value - p.qty);
//         this.cart.splice(index, 1);
//       }
//     }
//   }

//   clearCart() {
//     this.cart.length = 0;
//   }
// }

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
    { id: 0, name: 'Chapo Madondo', price: 50, amount: 1 },
    { id: 1, name: 'Githeri', price: 30, amount: 1 },
    { id: 2, name: 'Ugali Mboga', price: 50, amount: 1 },
    { id: 3, name: 'Salad', price: 30, amount: 1 },
    { id: 4, name: 'Samosa', price: 20, amount: 1 },
    { id: 5, name: 'Ugali Nyama', price: 100, amount: 1 },
    { id: 6, name: 'Mursik', price: 50, amount: 1 },
    { id: 7, name: 'Maziwa Fresh', price: 40, amount: 1 },
    { id: 8, name: 'Soda', price: 30, amount: 1 },
    { id: 9, name: 'Pancakes', price: 50, amount: 1 }
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
