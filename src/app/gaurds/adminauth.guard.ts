import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class AdminauthGuard implements CanActivate {
 
  constructor(private dataService: DataService, private router: Router) { }
  canActivate(): boolean {
    if (this.dataService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/signin']);
      return false;
    }
   }
  
}
