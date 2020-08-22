import { Component, OnInit } from '@angular/core';
import {PostProvider } from '../../../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.page.html',
  styleUrls: ['./add-menu.page.scss'],
})

export class AddMenuPage implements OnInit {

  // tslint:disable-next-line: variable-name
  item_name = '';
  // tslint:disable-next-line: variable-name
  item_description = '';
  // tslint:disable-next-line: variable-name
  item_price = '';
  itemStatus = '';
  id: number;

  constructor(

    private router: Router,
    private postPvdr: PostProvider,
    private actRoute: ActivatedRoute

    ) { }

  ngOnInit() {

    this.actRoute.params.subscribe((data: any) => {

      this.id = data.id;
      this.item_name = data.name;
      this.item_description = data.description;
      this.item_price = data.price;
      this.itemStatus = data.status;
      console.log(data);
    });

  }

  createdProses() {
    return new Promise(resolve => {

      const body = {

        aksi: 'add',
        item_name : this.item_name,
        item_description : this.item_description,
        item_price: this.item_price,
        itemStatus: this.itemStatus,
      };
      this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
        this.router.navigate(['menu']);
        console.log('submit works');
      });

    });

  }

  updateProses() {
        return new Promise(resolve => {
        const body = {
        aksi: 'update',
        item_id: this.id,
        item_name: this.item_name,
        item_description: this.item_description,
        item_price: this.item_price,
        itemStatus: this.itemStatus,

      };

        this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {

        this.router.navigate(['menu']);
        console.log('submit works');

      });

    });

  }

}
