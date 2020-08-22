import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ServiceproviderService {

   // tslint:disable-next-line: variable-name
   // tslint:disable-next-line: variable-name
   reg_URL = 'http://localhost:6000/cust_register';
   // tslint:disable-next-line: variable-name
   login_Url = 'http://localhost:6000/cust_login';
   result: any;
   responseData: any;

  // tslint:disable-next-line: max-line-length
  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, private toastCoantroller: ToastController, private loadingController: LoadingController, private router: Router) { }
  // tslint:disable-next-line: variable-name
  // tslint:disable-next-line: ban-types
  // tslint:disable-next-line: variable-name
  registerData(name: string, surname: string, email: string, password: string, cpassword: string, cell_no: string) {

    // tslint:disable-next-line: max-line-length
    return this.http.get('${this.reg_URL}?name=${name}&surname=${surname}&email=${email}&password=${password}&cell_no=${cell_no}').pipe(map(results => {
      this.responseData = results;
      this.router.navigate(['/home']);
    }));
  }

  loginData(email: string , password: string) {
    return this.http.get('${this.login_Url}?email=${email}&password').pipe(map(results => {
     localStorage.setItem('userdata', JSON.stringify(this.result));
     this.router.navigate(['/home']);
    }));
  }
}
