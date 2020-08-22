import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-custprof',
  templateUrl: './custprof.page.html',
  styleUrls: ['./custprof.page.scss'],
})
export class CustprofPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  back(){
    this.location.back();
  }

}
