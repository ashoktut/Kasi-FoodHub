import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from '../services/cart.service';
import { ModalController } from '@ionic/angular';
import { CartModalPage } from '../pages/cart-modal/cart-modal.page';
import { ExtrasPage } from '../pages/extras/extras.page';
import { Location } from '@angular/common';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  cart = [];
  products = [];
  ext = [];
  cartItemCount: BehaviorSubject<number>;
  menuList: Array<any> = [];

  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;

  constructor(private cartService: CartService, private modalCtrl: ModalController, private location: Location) { }

  // ngOnInit() {
  //   this.products = this.cartService.getProducts();
  //   this.cart = this.cartService.getCart();
  //   this.cartItemCount = this.cartService.getCartItemCount();
  // }
  ngOnInit() {

    // this.cartService.getItems().subscribe((data: any) => {
    //   this.menuList = data.menu;
    //   console.log(this.menuList);
    // });
    // this.ext = this.cartService.getExt();
    // this.cartItemCount = this.cartService.getCartItemCount();
  }


  addToCart(product) {
    this.animateCSS('tada');
    this.cartService.addProduct(product);
  }
  exProduct(product) {
    this.cartService.extraProd(product);
  }
  async openCart() {
    this.animateCSS('bounceOutLeft', true);
    const modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft');
      this.animateCSS('bounceLeft');
    });
    modal.present();
  }
  async openExtras() {
    const modal = await this.modalCtrl.create({
      component: ExtrasPage,
      cssClass: 'extras'
    });
    modal.present();
  }

  animateCSS(animationName, keepAnimated = false) {
    const node = this.fab.nativeElement;
    node.classList.add('animated', animationName);

    function handleAnimationEnd() {
      if (!keepAnimated) {
        node.classList.remove('animated', animationName);
      }
      node.removeEventListener('animationend', handleAnimationEnd);
    }
    node.addEventListener('animationend', handleAnimationEnd);
  }

  // added the back button manipulation-Tumie
  backButton() {
    this.location.back();
   }

}
