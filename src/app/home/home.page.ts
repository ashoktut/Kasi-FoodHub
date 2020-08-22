import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, ActionSheetController , LoadingController} from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  contentLoaded = false;
   // tslint:disable-next-line: max-line-length
   constructor(private route: Router, public actionSheetController: ActionSheetController,
               private loadingCtrl: LoadingController, private dataService: DataService,
               private searchService: SearchService) {
                 setTimeout(() => {
                   this.contentLoaded = true;
                 }, 3000);
               }

   searchTerm: any = '';

  // testing the admin data
  adminData: any = [];

  data: any = [];

  // search
  // searchData: any = [];
  rest: any = [];
  jsonData: any = [];

   // this a function of the actionsheet

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
           console.log('Myprofile clicked');
           this.route.navigateByUrl('/custprof');
         }
       }, {
         text: 'Restaurants',
         icon: 'restaurant-outline',
         handler: () => {
           console.log('Restaurants clicked');
           this.route.navigateByUrl('/restaurants');
         }
       }, {
         text: 'My cart',
         icon: 'cart-outline',
         handler: () => {
           console.log('My cart clicked');
           this.route.navigateByUrl('/cart-modal');
         }
       },
        {
         text: 'Signup',
         icon: 'person-add-outline',
         handler: () => {
           console.log('Signup clicked');
           this.route.navigateByUrl('/signup');
         }
        },
        {
          text: 'Order',
          icon: 'time-outline',
          handler: () => {
            console.log('Share clicked');
            this.route.navigateByUrl('/order2');
          }
        },
      {
       text: 'login',
       icon: 'person',
       handler: () => {
         console.log('login clicked');
         this.route.navigateByUrl('/login');
       }
   },
       {
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
      }, {
        text: 'About Us',
        icon: 'information-circle-outline',
        handler: () => {
          console.log('Share clicked');
          this.route.navigateByUrl('/profile');
        }
      },
         {
          text: 'goto admin',
          icon: 'help-circle-outline',
          handler: () => {
            console.log('admin clicked');
            this.route.navigateByUrl('/vendor-admin');
          }
      }
      ,
         {
          text: 'goto superadmin',
          icon: 'help-circle-outline',
          handler: () => {
            console.log('super admin clicked');
            this.route.navigateByUrl('/super-admin');
          }
      }, {
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

  public getRest() { // ive used the adminData here to test the connection. some of the variables should be change..pls dont touch
    return this.dataService.adminService().subscribe((data: any) => {this.adminData = data; console.log(this.adminData); });
  }

  ngOnInit() {
    this.getRest();
  }
  gotoRest() {
    this.route.navigateByUrl('/restaurants');
  }

  gotoMenu1() {

    this.route.navigateByUrl('/menu');

  }
  // Refresh fuction
  doRefresh(event) {

    setTimeout(() => {
      this.ionViewWillEnter();
      event.target.complete();
    }, 550);

  }

  gotoVendorMenu2() {
    this.route.navigateByUrl('/order2');
  }

  gotoVendorMenu3() {
    this.route.navigateByUrl('/order2');
  }
  // search bar
  // --------------------------------------------------
//   ionViewDidLoad() {
//    this.setFilteredItems();
// }


  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
        heading: 'mama`s kitchen',
        para1: 'real african food',
        para2: 'food for thought.'
      };
    }, 5000);
  }
}

// function for the restaurant click to menu


//  setFilteredItems() {

//          this.jsonData = this.dataService.filterItems(this.searchTerm);
//         /this.searchData = this.searchService.filterItems(this.searchTerm);
// }
// // ------------------------------------------------------



//     search() {
//       this.dataService.jsonData.subscribe((dat: any) => {this.jsonData = dat; console.log(this.jsonData); });
//      // return this.searchService.searchD().subscribe((dat: any) => {this.searchData = dat;console.log(this.searchData);});
//     }

//     slidesDidLoad(slides) {
//       slides.startAutoplay();
//     }

