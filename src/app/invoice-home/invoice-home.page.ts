import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service.ts.service';

@Component({
  selector: 'app-invoice-home',
  templateUrl: 'invoice-home.page.html',
  styleUrls: ['invoice-home.page.scss'],
})
export class HomePage {

  invoices:any = []

  constructor(
    public navCtrl: NavController,
    public datos: DataService
  ) {

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
