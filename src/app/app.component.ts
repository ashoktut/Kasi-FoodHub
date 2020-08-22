import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfilePage} from './pages/vendor/profile/profile.page';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AddMenuPage} from './pages/vendor/add-menu/add-menu.page';
import { OverviewPage} from './pages/vendor/overview/overview.page';
import { from } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar, private modalCtrl: ModalController,
   // private authenticationService: AuthenticationService
    private storage: Storage,
    public navCtrl: NavController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // auth services and guard
  /*
      this.authenticationService.authState.subscribe(state => {
        if (state) {
          this.router.navigate(['home']);
        } else {
          this.router.navigate(['signin']);
        }
      });*/
      this.storage.get('storage_xxx').then((res) => {
        if (res == null) {
          // tslint:disable-next-line: no-unused-expression
          this.navCtrl.navigateRoot('');
        } else {

        }
      });
    });
  }

   async openProfile() {
     const modal = await this.modalCtrl.create({
       component: ProfilePage,
       cssClass: 'profile'
     });
     modal.present();
   }

  async openAddMenu() {
    const modal = await this.modalCtrl.create({
      component: AddMenuPage,
      cssClass: 'menu'
    });
    modal.present();
  }
  async openOverview() {
    const modal = await this.modalCtrl.create({
      component: OverviewPage,
      cssClass: 'overview'
    });
    modal.present();
  }

}
