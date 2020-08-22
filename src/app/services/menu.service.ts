import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  /*private dish: Dish[];
  private lastId: number = 20;

  constructor(private  http:HttpClient) { }

  getMenu():Observable<Dish[]>{
    if (this.dish) {
      return of(this.dish)
    }else {
      //fetch dish
      return this.http.get<Dish[]>('./assets/dish.json')
      .pipe(tap(dish => this.dish = dish));
    }
  }

   getDishByCategory(category: string): Observable<Dish[]> {
    return this.getDish().pipe(map(this.dish => this.dish.filter(dish => dish.category == category)));
  }

  getDishById(id: number): Observable<Dish[]> {
    return this.getDish().pipe(map(this.dish => this.dish.find(dish => dish.id == id)));
  }

  createDish(dish: Dish) {
    dish.id = this.lastId + 1;
    // increment lastId value
    this.lastId = this.lastId + 1;
    this.dish.push(dish);
  }
  updateContact(dish: Dish): Dish {
    let itemIndex = this.dish.findIndex(item => item.id == dish.id);
    this.dish[itemIndex] = dish;
    return dish;
  }
  deleteContact(id: number): Dish {
    let itemIndex = this.dish.findIndex(item => item.id == id);
    return this.dish.splice(itemIndex, 1)[0];
  }*/
}
