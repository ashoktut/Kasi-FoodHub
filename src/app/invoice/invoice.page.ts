import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { DataService } from '../data.service.ts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss'],
})
export class InvoicePage implements OnInit {

  invoice = {
    id: undefined,
    costumer: undefined,
    date: undefined,
    street:undefined,
    city:undefined,
    cod:undefined,
    email:undefined,
    phone:undefined,
    items:[],
    tax:0,
    total: 0,
    numberInvoice: 0
  }

  new = false

  constructor(
    public alertController: AlertController,
    public navCtrl: NavController,
    public datos: DataService,
    public aroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.aroute.params.subscribe(data => {
      if(data.id == 'new'){
        this.new = true
        this.invoice.id = this.datos.uniqueID()
      } else {
        this.invoice = this.datos.getItem(data.id)
        console.log(this.invoice);
        
      }
    })
  }

  deleteItem(index){
    this.invoice.items.splice(index,1)
    this.goTotal()
  }

  goTotal(){
    if(this.invoice.items.length > 0)
    this.invoice.total = this.invoice.items.map( e => e.price).reduce((e,ele)=> e + ele)
    else 
    this.invoice.total = 0
  }

  async addItem() {
    const alert = await this.alertController.create({
      header: 'New Item',
      inputs: [
        {
          name: 'description',
          type: 'text',
          placeholder: 'Description Item'
        },
        {
          name: 'price',
          type: 'text',
          placeholder: 'Price Item'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Add',
          handler: (data) => {
            console.log(data);
            data.price = parseInt(data.price)
            this.invoice.items.push(data)
            this.goTotal()
          }
        }
      ]
    });

    await alert.present();
  }

  print(boo){

    this.datos.print(this.invoice, boo)
    // this.navCtrl.pop()
    this.new ? this.datos.saveInvoice(this.invoice) : this.datos.saveItemExist(this.invoice)

  }

}
