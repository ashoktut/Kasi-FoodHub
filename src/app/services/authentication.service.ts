import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Platform, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authState = new BehaviorSubject(false);
 
  constructor(
    private router: Router,
    private storage: Storage,
    private platform: Platform,
    public toastController: ToastController
  ) {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }
 
  ifLoggedIn() {
    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.authState.next(true);
      }
    });
  }
 
  
  login() {
    var dummy_response = {
      user_id: '007',
      user_name: 'test'
    };
    this.storage.set('USER_INFO', dummy_response).then((response) => {
      this.router.navigate(['home']);
      this.authState.next(true);
    });
  }
 
  logout() {
    this.storage.remove('USER_INFO').then(() => {
      this.router.navigate(['signin']);
      this.authState.next(false);
    });
  }
 
  isAuthenticated() {
    // return this.authState.value;
    return this.authState.value;
  }
}
