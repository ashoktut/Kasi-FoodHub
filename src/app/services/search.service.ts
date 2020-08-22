import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  // tslint:disable-next-line: variable-name
  search_url = 'http://168.172.185.4:6000/search';
  constructor(private http: HttpClient) { }
  search: any;
  searchD(){
     return this.http.get<any>(this.search_url);
  }
  filterItems(searchTerm){
 
    return this.search.filter((item) => {
         return item.name.toLowerCase().includes(searchTerm.toLowerCase());
     });

 }

}
