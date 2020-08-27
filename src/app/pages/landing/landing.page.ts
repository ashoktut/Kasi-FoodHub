import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../../data.service.ts.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  invoices:any = []

  constructor(
    public navCtrl: NavController,
    public datos: DataService
  ) {}

  ngOnInit() {
  }

  
  ionViewWillEnter() {
    this.datos.checkItems()
    this.invoices = this.datos.getItems()
    console.log(this.invoices);
    
  }


  goInvoice(id){
    this.navCtrl.navigateForward('invoice/' + id)
  }

  deleteInvoice(item){
    this.datos.deleteItem(item)
    this.invoices = this.datos.getItems()
  }

  print(){

  }

  editInfo(){
    this.navCtrl.navigateForward('edit')
  }

}
