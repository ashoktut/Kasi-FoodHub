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

  firstname: string = "";
  surname: string = "";
  gender: string = "";
  // tslint:disable-next-line: variable-name
  cell_no: number;
  // tslint:disable-next-line: variable-name
  email_address: string = "";
  addressInfo: string ="";
  passcode: string = "";
  // tslint:disable-next-line: variable-name
  confirm_password: string = "";

  // userData = {"name":"", "surname":"", "email":"","password":"", "cpassword":"", "cell_no":""};//reg
  // tslint:disable-next-line: max-line-length
  constructor(private route: Router, private location: Location, private actRoute: ActivatedRoute, private postPvdr: PostProvider) { }

  ngOnInit() {

    this.actRoute.params.subscribe((data: any) => {

      this.firstname = data.name;
      this.surname = data.sur;
      this.passcode = data.pass;
      this.email_address = data.email;
      this.addressInfo = data.addressI;
      this.gender = data.gen;
      this.confirm_password = data.confirm;

    });

  }

  registerEnter() {

    return new Promise(resolve => {

      const body = {

        aksi: 'addCustomer',
        firstname: this.firstname,
        surname: this.surname,
        passcode: this.passcode,
        email_address: this.email_address,
        addressInfo: this.addressInfo,
        gender: this.gender,
        confirm_password: this.confirm_password,

      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
      this.route.navigate(['login']);
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
