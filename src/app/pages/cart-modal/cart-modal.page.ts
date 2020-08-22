// import { Product, CartService } from '../../services/cart.service';
// import { Component, OnInit } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { ModalController, AlertController } from '@ionic/angular';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-cart-modal',
//   templateUrl: './cart-modal.page.html',
//   styleUrls: ['./cart-modal.page.scss'],
// })
// export class CartModalPage implements OnInit {

//   cart: Product[] = [];
//   qty = 0;
//   cartItemCount: BehaviorSubject<number>;
//   // tslint:disable-next-line: max-line-length
// tslint:disable-next-line: max-line-length
//   constructor(private cartService: CartService, private modalCtrl: ModalController, private alertCtrl: AlertController, private router: Router) { }

//   ngOnInit() {
//     this.cart = this.cartService.getProducts();
//   }

//   decreaseCartItem(product) {
//     this.cartService.decreaseProduct(product);
//   }

//   increaseCartItem(product) {
//     this.cartService.addProduct(product);
//   }

//   removeCartItem(product) {
//     this.cartService.removeProduct(product);
//   }

//   getTotal() {
//     return this.cart.reduce((i, j) => i + j.price * j.qty, 0);
//   }

//   close() {
//     this.modalCtrl.dismiss();

//   }

//   carddetails() {
//     this.close();
//     this.router.navigate(['/stripe']);
//   }

// }

import { Product, CartService } from '../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {

  cart: Product[] = [];

  // tslint:disable-next-line: max-line-length
  constructor(private cartService: CartService, private modalCtrl: ModalController, private alertCtrl: AlertController, private router: Router) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }

  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  carddetails() {
     this.close();
    // this.router.navigate(['/stripe']);
     const total =  this.cart.reduce((i, j) => i + j.price * j.amount, 0);
     this.router.navigate(['/stripe'], { queryParams: { total }});

  }

  async checkout() {
    // Perfom M-pesa, Mastercard, PayPal checkout process

    const cartCount =  this.cart.length;
    console.log('cart item count: ' + cartCount);

    this.cartService.clearCart();


    const alert = await this.alertCtrl.create({
      mode: 'ios',
      header: 'Thanks for your Order!',
      message: 'We will deliver your chakula as soon as possible',
      buttons: ['SAWA']
    });
    alert.present().then(() => {
      this.modalCtrl.dismiss();
    });
  }
}
