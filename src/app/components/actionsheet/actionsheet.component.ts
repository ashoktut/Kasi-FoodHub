import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actionsheet',
  templateUrl: './actionsheet.component.html',
  styleUrls: ['./actionsheet.component.scss'],
})
export class ActionsheetComponent implements OnInit {

  constructor(private route: Router,public actionSheetController: ActionSheetController) { }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Menu',
      buttons: [{
        text: 'Home',
        role: 'destructive',
        icon: 'home-outline',
        
        handler: () => {
          console.log('Home clicked');
          this.route.navigateByUrl('home');
        }
      }, {
        text: 'My Account',
        icon: 'person-circle-outline',
        handler: () => {
          console.log('Share clicked');
          this.route.navigateByUrl('/profile');
        }
      }, {
        text: 'Restaurants',
        icon: 'restaurant-outline',
        handler: () => {
          console.log('Play clicked');
          this.route.navigateByUrl('/restaurants');
        }
      }, {
        text: 'My cart',
        icon: 'cart-outline',
        handler: () => {
          console.log('Favorite clicked');
          this.route.navigateByUrl('/cart-modal');
        }
      },
       {
        text: 'Register as a Vendor',
        icon: 'person-add-outline',
        handler: () => {
          console.log('Favorite clicked');
          this.route.navigateByUrl('/signupadmin');
        }
      }, 
      {
       text: 'Register as a customer',
       icon: 'person-add-outline',
       handler: () => {
         console.log('Favorite clicked');
         this.route.navigateByUrl('/signupcust');
       }
     },   {
       text: 'Sign in',
       icon: 'person',
       handler: () => {
         console.log('Favorite clicked');
         this.route.navigateByUrl('/login');
       }
     },{
       text: 'History',
       icon: 'time-outline',
       handler: () => {
         console.log('Share clicked');
         this.route.navigateByUrl('/profile');
       }
     }, {
       text: 'Support',
       icon: 'help-circle-outline',
       handler: () => {
         console.log('Share clicked');
         this.route.navigateByUrl('/profile');
       }
     },{
       text: 'About Us',
       icon: 'information-circle-outline',
       handler: () => {
         console.log('Share clicked');
         this.route.navigateByUrl('/profile');
       }
     },{
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  ngOnInit() {}

}
