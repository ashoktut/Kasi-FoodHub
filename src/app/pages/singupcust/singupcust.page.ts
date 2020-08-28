import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ToastController } from '@ionic/angular';
import {PostProvider } from '../../../providers/post-provider';
import { ServiceproviderService } from 'src/app/services/serviceprovider.service';

@Component({
  selector: 'app-singupcust',
  templateUrl: './singupcust.page.html',
  styleUrls: ['./singupcust.page.scss'],
})
export class SingupcustPage implements OnInit {

  firstName: string = "";
  surname: string = "";
  gender: string = "";
  // tslint:disable-next-line: variable-name
  cell_no: number;
  // tslint:disable-next-line: variable-name
  email_address: string = "";
  addressInfo: string ="";
  passCode: string = "";
  // tslint:disable-next-line: variable-name
  confirm_password: string = "";

  // userData = {"name":"", "surname":"", "email":"","password":"", "cpassword":"", "cell_no":""};//reg
  // tslint:disable-next-line: max-line-length
  constructor(private route: Router, private location: Location, private actRoute: ActivatedRoute, private postPvdr: PostProvider) { }

  ngOnInit() {

    this.actRoute.params.subscribe((data: any) => {

      this.firstName = data.firstName;
      this.surname = data.surname;
      this.passCode = data.passCode;
      this.email_address = data.email_address;
      this.addressInfo = data.addressI;
      this.gender = data.gender;

    });

  }

  registerEnter() {

    return new Promise(resolve => {

      const body = {

        aksi: 'addCustomer',
        firstName: this.firstName,
        surname: this.surname,
        passCode: this.passCode,
        email_address: this.email_address,
        addressInfo: this.addressInfo,
        gender: this.gender,

      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
      this.route.navigate(['signin']);
      console.log('submit works');

      });

    });

  }
 /* registerEnter() {

    // tslint:disable-next-line: max-line-length
    this.serv.registerData(this.userData.name,
    this.userData.surname, this.userData.email, this.userData.password, this.userData.cpassword, this.userData.cell_no);


  }*/


 /* goHome()
 {
   this.route.navigateByUrl('/home');
 }
 btnClear(){
 } */


 // back button
 backButton() {
  this.location.back();
 }




}
