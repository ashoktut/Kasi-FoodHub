import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { ReactiveFormsModule, FormBuilder, FormControl, Validators} from '@angular/forms';
import {Location } from '@angular/common';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  isDisplay = true;
  toggleDisplay() {
    this.isDisplay = true;
  }
  toggleDisplayNot() {
    this.isDisplay = false;
  }
  constructor(private router: Router, private formBuilder: FormBuilder/**/, private location: Location) {
   }

  ngOnInit() {
  }

  order() {

    document.getElementById('name').innerHTML = 'Order SUCCESSFUL';
    (document.getElementById('submit') as HTMLInputElement).disabled = true;
    this.router.navigateByUrl('payments');

  }

  home() {
    this.router.navigate(['home']);
  }
// back button
back() {
  this.location.back();
}
}

