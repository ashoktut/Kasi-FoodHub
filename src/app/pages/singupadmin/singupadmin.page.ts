import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {PostProvider } from '../../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singupadmin',
  templateUrl: './singupadmin.page.html',
  styleUrls: ['./singupadmin.page.scss'],
})
export class SingupadminPage implements OnInit {

    // tslint:disable-next-line: variable-name
    restuarant_id: number;
    // tslint:disable-next-line: variable-name
    // tslint:disable-next-line: variable-name
    // tslint:disable-next-line: no-inferrable-types
    // tslint:disable-next-line: variable-name
    // tslint:disable-next-line: quotemark
    // tslint:disable-next-line: no-inferrable-types
    // tslint:disable-next-line: variable-name
    // tslint:disable-next-line: no-inferrable-types
    // tslint:disable-next-line: variable-name
    // tslint:disable-next-line: no-inferrable-types
    // tslint:disable-next-line: variable-name
    // tslint:disable-next-line: no-inferrable-types
    // tslint:disable-next-line: variable-name
    // tslint:disable-next-line: quotemark
    restuarant_name: string = "";
    contact: string = "";
    address_loc: string = "";
    pass_word: string = "";
    email_address: string = "";
    rest_status: string = "";
    conPassword: string = "";

  constructor(
    private router: Router,
    private postPvdr: PostProvider,
    private actRoute:ActivatedRoute,
    private location: Location) { }

  ngOnInit() {

    this.actRoute.params.subscribe((data: any) => {

      this.restuarant_id = data.id;
      this.restuarant_name = data.name;
      this.pass_word = data.password;
      this.email_address = data.e_address;
      this.rest_status = data.status;
      this.contact = data.phone;
      this.address_loc = data.address;
      this.conPassword = data.conP;
      console.log(data);

    });

  }

  goHome() {

      return new Promise(resolve => {

        const body = {

          aksi: 'add-restInfo',
          restuarant_name: this.restuarant_name,
          pass_word: this.pass_word,
          email_address: this.email_address,
          rest_status: this.rest_status,
          contact: this.contact,
          address_loc: this.address_loc,
          conPassword: this.conPassword,

        };
        this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
        this.router.navigateByUrl('/login');
        console.log('submit works');

        });

      });

      this.router.navigate(['home']);

 }
 navAdmin() {
  return this.router.navigateByUrl('/vendor-admin');
}
 btnClear() {

}
// back button
backButton() {
  this.location.back();
 }


}

