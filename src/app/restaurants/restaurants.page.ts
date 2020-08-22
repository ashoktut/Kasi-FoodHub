import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

import { RestaurantService } from '../services/restaurant.service';

import { Location } from '@angular/common';
import { DataService } from '../services/data.service';
// import { RestaurantService } from '../services/restaurant.service';
// import { ActionsheetComponent } from '../components/actionsheet/actionsheet.component';



@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {


  constructor(private route: Router, private location: Location, private dataService: DataService) { }
rest: any = [];

  ngOnInit() {
   this.getRest();
  }
 /* list()
  {
    return this.asheet.presentActionSheet()
  }*/
 order() {
   this.route.navigateByUrl('/order2');
 }
 secOrder() {
   this.route.navigateByUrl('/order');
 }
 thirdOrder() {
   this.route.navigateByUrl('/order3');
 }

 backButto() {
  this.location.back();
 }
 getRest() {

  return this.dataService.grest()
  .subscribe(data => {this.rest = data ; console.log(data); });
 }

}
