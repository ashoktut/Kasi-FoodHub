import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vendor-menu3',
  templateUrl: './vendor-menu3.page.html',
  styleUrls: ['./vendor-menu3.page.scss'],
})
export class VendorMenu3Page implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }

  
back(){
  this.location.back();
}

}
