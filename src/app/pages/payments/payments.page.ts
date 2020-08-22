import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Stripe } from '@ionic-native/stripe/ngx';



@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {
  cardNumber: string;
  cardMonth: number;
  cardYear: number;
  cardCVV: string;

  constructor(private stripe: Stripe,
              private alertCtrl: AlertController,
              public http: HttpClient, private router: Router, public navCtrl: NavController, public navParams: NavParams) { }
  ngOnInit() {
  }

  // home() {

  //   this.router.navigate(['/home']);

  // }

  // pay() {
  //   this.stripe.setPublishableKey('pk_test_xxxxxxxxxxx');
  //   this.stripe.createCardToken(this.cardinfo).then((token) => {

  //    console.log(token);

  //    const headers = new HttpHeaders().set('Content-Type', 'application/json');
  //    const paydata = { stripeToken: token, amount: 1, description: 'test payment' };


  //    const url = 'https://yourserver-middleware/charge';

  //    this.http.post(url, {headers }).subscribe((res) => {
  //       if (res) {
  //         const alert = this.alertCtrl.create({
  //           header: 'Order Success',
  //           message: 'We will deliver your order soon',
  //           buttons: ['OK']
  //         });

  //       }

  //     });
  //   });
  // }

  ionViewDidLoad() {
    this.stripe.setPublishableKey('YOUR_API_KEY');
  }


  validateCard() {
    const card = {
      number: this.cardNumber,
      expMonth: this.cardMonth,
      expYear: this.cardYear,
      cvc: this.cardCVV
     };

     // Run card validation here and then attempt to tokenise

    this.stripe.createCardToken(card)
        .then(token => console.log(token))
        .catch(error => console.error(error));
  }

}

