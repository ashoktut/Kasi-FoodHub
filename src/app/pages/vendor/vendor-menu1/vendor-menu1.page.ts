import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vendor-menu1',
  templateUrl: './vendor-menu1.page.html',
  styleUrls: ['./vendor-menu1.page.scss'],
})
export class VendorMenu1Page implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  back(){
    this.location.back();
  }
  

}

