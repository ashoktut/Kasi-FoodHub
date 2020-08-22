import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {
  currencyIcon = 'R';
  paymentAmount = '400';
  constructor(private adminService: AdminService, private route: Router ) { }
  adminProf: any = '';

 ngOnInit() {
  this.getAdminData();
 }
 getAdminData() {
   return this.adminService.getProfile().subscribe((data: any) => {this.adminProf = data; console.log(this.adminProf); });
 }

}
