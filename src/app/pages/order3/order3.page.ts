import { CartPage } from '../cart/cart.page';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { NavController, ToastController, NavParams } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';
import { ModalController } from '@ionic/angular';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import { ExtrasPage } from '../extras/extras.page';
import { Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-order3',
  templateUrl: './order3.page.html',
  styleUrls: ['./order3.page.scss'],
})

export class Order3Page implements OnInit {
  // tslint:disable-next-line: max-line-length
  constructor(private cartService: CartService, public navCtrl: NavController, public toastCtrl: ToastController, private router: Router) {

  }

  static cartItemsData = [];

  public navParams = new NavParams();

  products = [
    {
        id: '100001',
        name: 'Pineapple',
        category: 'Fruits',
        price: '2.00',
        quantity: '1',
        quantitytype: '1 Unit',
        image: 'assets/images/food6.jpg'
    },
    {
        id: '100002',
        name: 'Orange',
        category: 'Fruits',
        price: '1.50',
        quantity: '1',
        quantitytype: '1 Kg',
        image: 'assets/images/food6.jpg'
    },
    {
        id: '100003',
        name: 'Apple',
        category: 'Fruits',
        price: '3.50',
        quantity: '1',
        quantitytype: '1 Kg',
        image: 'assets/images/food6.jpg'
    },
    {
        id: '100004',
        name: 'Strawberry',
        category: 'Fruits',
        price: '4.50',
        quantity: '1',
        quantitytype: '1 Kg',
        image: 'assets/images/food6.jpg'
    }
];

  // tslint:disable-next-line: member-ordering
  public static storeToCart(itemid, itemname, itemquantity, itemquantitytype, itemprice, itemImage) {
    const itemtotal = itemprice;
    Order3Page.cartItemsData.push({itemid, itemname, itemquantity, itemquantitytype, itemprice, itemtotal, itemImage});
    console.log(Order3Page.cartItemsData);
  }


  // check cart data if item is already present

  public static checkCart(itemid) {
    let result;

    for (const val of Order3Page.cartItemsData) {
      if (val.itemid === itemid) {
          result = true;
          break;
      } else {
        result = false;
      }
    }

    return result;
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // return cart product count

  cartCounterManager() {
    return Order3Page.cartItemsData.length;
  }

  gotocart() {
    // this.router.push(CartPage);
    this.router.navigateByUrl('/cart');
  }


  async addToCart(itemid: any, itemname: any, itemquantity: any, itemquantitytype: any, itemprice: any, itemImage: any) {
    if (Order3Page.checkCart(itemid) !== true) {
      Order3Page.storeToCart(itemid, itemname, itemquantity, itemquantitytype, itemprice, itemImage);
      const toast = await this.toastCtrl.create({
        message: 'Product Added to Cart!',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    } else {
      const toast = await this.toastCtrl.create({
        message: 'Product Already in Cart!',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    }
  }
}
