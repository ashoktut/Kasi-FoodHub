import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../../../providers/post-provider';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menus: any = [];
  limit = 50; // limit get perdata returned
  start = 0;

  constructor(
    private router: Router,
    private postPvdr: PostProvider,
  ) {

    this.loadMenu();

   }

  setFilteredItems(event) {

    this.loadMenu();
    const val = event.target.value;

    if (val && val.trim() != '') {

          this.menus = this.menus.filter((item) => {

              return (item.item_name.toLowerCase().indexOf(val.toLowerCase()) > -1);

          });

      }


  }

  selectVal(val) {

      alert("You have selected = " + val);

  }

  ngOnInit() {
  }

  ionViewWillEnter() {

      this.menus = [];
      this.start = 0;
      this.loadMenu();

  }

  addMenu() {

    this.router.navigate(['add-menu']);

  }

  deleteMenu(id) {

      const body = {

        aksi: 'delete',
        item_id: id

      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {

        this.ionViewWillEnter();

      });

  }

  updateMenu(id, name, price, description, status) {

    this.router.navigate(['add-menu/' + id  + '/' + name + '/' + price + '/' + description + '/' + status]);

  }

showMenu(id, name, price, description, status) {

    this.router.navigate(['show-menu/' + id  + '/' + name + '/' + price + '/' + description + '/' + status]);

  }

  doRefresh(event) {

    setTimeout(() => {
      this.ionViewWillEnter();
      event.target.complete();
    }, 550);

  }

  loadMenu() {

    return new Promise(resolve => {

      const body = {

        aksi: 'getdata',
        limit: this.limit,
        start: this.start,

      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {

            for (const menu of data.result) {
              this.menus.push(menu);

            }

            resolve(true);

          });

      });

    }

  }
