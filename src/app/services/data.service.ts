import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  jsonData: any  = 'http://localhost:6000/viewMenu'; // search bar purpose

  constructor(private http: HttpClient) {
    // data for testing searchbar, this will be deleted !!!
   this.jsonData = [
      {id: 1, label: 'saw', name: 'Sephahlo'},
      {id: 2, label: 'saw1', name: 'Mogodu'},
      {id: 3, label: 'saw2', name: 'malana'},
      {id: 4, label: 'saw2', name: 'Gowdaman'},
      {id: 5, label: 'saw2', name: 'Neethi'},
      {id: 6, label: 'saw2', name: 'abirami1'},
      {id: 7, label: 'saw2', name: 'abirami2'},
      {id: 8, label: 'saw2', name: 'Harrish'},
      {id: 9, label: 'saw2', name: 'Lokesh'},
      {id: 10, label: 'saw2', name: 'Deepak'},
      {id: 11, label: 'saw2', name: 'malliga'},
      {id: 12, label: 'saw2', name: 'malliga1'}

      ];

   }

// create an API here, likke this?
  // tslint:disable-next-line: variable-name
  reg_url = '';
  // tslint:disable-next-line: variable-name
  log_url = '';
  // tslint:disable-next-line: variable-name
  show_rest_url = 'http://localhost:4000/allrestuarant';
  // tslint:disable-next-line: variable-name
  prof_url = '';
  // tslint:disable-next-line: variable-name
  admin_prof_url = 'http://localhost:4000/admin';
  logged =  0;

  adminService() {
    return this.http.get<any>(this.admin_prof_url);
  }

  grest() {
    return this.http.get<any>(this.show_rest_url);
  }

  // this was used for testing the search bar
  filterItems(searchTerm) {

    return this.jsonData.filter((item) => {
         return item.name.toLowerCase().includes(searchTerm.toLowerCase());
     });

 }

 // user login
 loginUser(user) {

    return this.http.post<any>(this.admin_prof_url + '_login', user);
  }

  loggedIn() {

    return !!localStorage.getItem('token');
  }

getToken() {
    return localStorage.getItem('token');
  }

}
