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

  /*get house(){
    return this.addressForm.get('house');
  }
  get street(){
    return this.addressForm.get('street');
  }
  get city(){
    return this.addressForm.get('city');
  }
  get town(){
    return this.addressForm.get('town');
  }
  get zip(){
    return this.addressForm.get('zip');
  }

  public errorMessages = {
    house: [
      {type: 'required',message: 'House number is required'},
      {type: 'maxlength', message: 'House number cant be longer than 10 characters'}
    ],
    street: [
      {type: 'required',message: 'Street Address is required'},
      {type: 'maxlength', message: 'Street Address cant be longer than 100 characters'}
    ],
    city: [
      {type: 'required',message: 'City is required'},
      {type: 'maxlength', message: 'City cant be longer than 100 characters'}
    ],
    town: [
      {type: 'required',message: 'Town is required'},
      {type: 'maxlength', message: 'Town cant be longer than 100 characters'}
    ],
    zip: [
      {type: 'pattern',message: 'Please enter a valid zip code'},
     ],
  }

  addressForm = this.formBuilder.group({
    house: ['',[Validators.required, Validators.maxLength(10)]],
    street: ['',[Validators.required, Validators.maxLength(100)]],
    city: ['',[Validators.required, Validators.maxLength(100)]],
    town: ['',[Validators.required, Validators.maxLength(100)]],
    zip: ['',,[Validators.required, Validators.pattern("^[0-9]{5}(?:-[0-9]{4})?$")]]
  });
*/
  isDisplay = true;
  toggleDisplay() {
    this.isDisplay = true;
  }
  toggleDisplayNot() {
    this.isDisplay = false;
  }
  constructor(private router: Router, private formBuilder: FormBuilder/**/, private location: Location) {



  /* public submit(){
     console.log(this.addressForm.value);*/
   }

  ngOnInit() {
  }

  order() {

    document.getElementById('name').innerHTML = 'Order SUCCESSFUL';
    (document.getElementById('submit') as HTMLInputElement).disabled = true;
    //
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

