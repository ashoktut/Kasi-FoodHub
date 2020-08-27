import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  company = {
    name: undefined,
    address: undefined,
    email: undefined,
    city: undefined,
    state: undefined,
    phone: undefined,
    zip: undefined
  }

  constructor(
    public navCtrl : NavController
  ) { }

  ngOnInit() {
    if(!localStorage.getItem('company')){
      localStorage.setItem('company', JSON.stringify(this.company))
    } else {
      this.company = JSON.parse(localStorage.getItem('company'))
    }
  }

  save(){
    localStorage.setItem('company', JSON.stringify(this.company))
    this.navCtrl.pop()
  }

}
