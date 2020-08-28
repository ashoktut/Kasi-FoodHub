import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { ModalController } from '@ionic/angular';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import { config } from 'process';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-extras',
  templateUrl: './extras.page.html',
  styleUrls: ['./extras.page.scss'],
})
export class ExtrasPage implements OnInit {

  constructor(private router: Router, private cartService: CartService, private modalCtrl: ModalController) { }
  extra = [];
  cart = [];
  prod = [];
  ext = [];
  cartItemCount: BehaviorSubject<number>;

  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;

  flavor: string;

  ngOnInit() {
 
  }
}
