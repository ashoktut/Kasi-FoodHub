import { Component } from '@angular/core';
import { Stripe } from '@ionic-native/stripe/ngx';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stripe',
  templateUrl: 'stripe.page.html',
  styleUrls: ['stripe.page.scss'],
})
export class StripePage {
  paymentAmount = '200';
  currency = 'ZAR';
  currencyIcon = 'R';
  total = '';
  // tslint:disable-next-line: variable-name and publishable stripe key
  stripe_key = 'pk_test_51HCjoXCp71m9KMQuzhegHPbWREpe6PbgUy0IMmXrjsCZGH5DzlVO2JaUT0AXlN0mQu0YVEZNmjgBCrjBz31lypvL00J4BZIWnY';
  cardDetails: any = {};

  constructor(private stripe: Stripe, private http: HttpClient, private route: Router, private actRoute: ActivatedRoute) {

    this.actRoute.queryParams.subscribe((data) => {

      this.total = JSON.stringify(data);

    });


  }

  payWithStripe() {
    this.route.navigate(['landing']);
    this.stripe.setPublishableKey(this.stripe_key);

    this.cardDetails = {
      number: '4242424242424242',
      expMonth: 12,
      expYear: 2020,
      cvc: '220'
    };

    this.stripe.createCardToken(this.cardDetails)
      .then(token => {
        console.log(token);
        this.makePayment(token.id);
      })
      .catch(error => console.error(error));
    
    }

  makePayment(token) {
    this.http
      .post('https://us-central1-shoppr-c97a7.cloudfunctions.net/payWithStripe', {
        token: token.id
      })
      .subscribe(data => {
        console.log(data);
      });
  }

}
