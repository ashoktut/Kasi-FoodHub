import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-menu',
  templateUrl: './show-menu.page.html',
  styleUrls: ['./show-menu.page.scss'],
})
export class ShowMenuPage implements OnInit {

  item_name: string = "";
  item_description: string = "";
  item_price: string = "";
  itemStatus: string = "";
  id: number;

  constructor(
    private router:Router,
    private postPvdr: PostProvider,
    private actRoute:ActivatedRoute
  ) { }

  ngOnInit() {

    this.actRoute.params.subscribe((data:any) => {

      this.id = data.id;
      this.item_name = data.name;
      this.item_description = data.description;
      this.item_price = data.price;
      this.itemStatus = data.status;
      console.log(data);

      });
    
    }

}
