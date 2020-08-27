import { Injectable } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  saveInvoice(item){
    this.checkItems()
    let items:any = this.getItems()
    let index = items.findIndex(e => e.id == item.id)
    if(index == -1){
      items.push(item)
      this.saveItems(items)
    }
  }

  saveItemExist(item){
    let items = this.getItems() as any
    let index = items.findIndex(e => e.id == item.id)
    if(index !== -1 ){
      items.splice(index,1, item)
      this.saveItems(items)
    }
  }
  getItem(id){
    let items = this.getItems() as any
    let item = items.find(e => e.id == id)
    return item
  }

  deleteItem(index){
    let items = this.getItems() as any
    items.splice(index,1)
    this.saveItems(items)
  }

  getItems(){
    return JSON.parse(localStorage.getItem('invoices'))
  }

  checkItems(){
    let items = []
    if(!localStorage.getItem('invoices')){
      localStorage.setItem('invoices',JSON.stringify(items))
    }
  }

  saveItems(items){
    localStorage.setItem('invoices', JSON.stringify(items))
  }

  uniqueID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c)=> {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  print(invo, boo){

    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    let title = boo ? 'INVOICE' : 'QUOTE'
    let company = JSON.parse(localStorage.getItem('company'))
    let mydate = new Date(invo.date).toUTCString().substr(0,17)
    

    let goTable1 = ()=>{

      let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      })

      let rows = []
      rows.push(['Item', 'Description', 'Price'])
      invo.items.map((item,index) => {
        rows.push([`# ${index +1}`, item.description, `${formatter.format(item.price)}`])
      })

      return rows;

    }
    let goTable2 = ()=>{

      let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      })

      let taxes = (invo.tax*invo.total) / 100
      let subtotal = formatter.format(invo.total) 
      let tax = invo.tax == 0 ? 0 : formatter.format( taxes )
      let total = formatter.format(invo.total + taxes)

      let rows = [
        ['Subtotal', subtotal],
        [`Tax %${invo.tax}`, tax],
        [ { text: 'Total', style: 'subheader', color: '#264A7B'}, 
          { text: total, style: 'subheader', color: '#264A7B'} 
        ]
      ]
      return rows;

    }

    let dd = {

      content:[

        {columns: [
          
          { width: 300, text: `${company.name}`, style: 'subheader2', color: '#264A7B'},
          // { width: 180, image: this.logo },
          { width: '*', text:' '}, 
          { width: '*', text: title, style: 'header', color: '#264A7B'}
        ]},
        {
          columns: [
            [
              { width: 300, text: `\n Phone number ${company.phone}`},
              { width: 300, text: `Email ${company.email}`},
              { width: 300, text: `Address ${company.address}`},
              { width: 300, text: `City ${company.city}`},
              { width: 300, text: `State ${company.state}, Zip ${company.zip}`}
            ],
            [

            ],
            [
              { width: 300, text: `Number ${boo ? 'Invoice': 'Quote'}`, style: 'subheader', color: '#264A7B'},
              { width: 300, text: `# ${invo.numberInvoice}`},
              { width: 300, text: `Date`, style: 'subheader', color: '#264A7B'},
              { width: 300, text: `${mydate}`}
            ]
            
          ]
        },
        { width: 300, text: `${boo ? 'Bill': 'Quote'} to`, style: 'subheader', color: '#264A7B'},
        { width: 300, text: `${invo.costumer}`},
        { width: 300, text: `Phone number ${invo.phone}`},
        { width: 300, text: `Email ${invo.email}`},
        { width: 300, text: `Address ${invo.street}`},
        { width: 300, text: `City ${invo.city}`},
        { width: 300, text: `State ${company.state}, Zip ${invo.cod}`},
        { width: 300, text: `\n\n`},
        {
          style: 'tableExample',
          table: {
            widths: [40, '*', 100],
            body: goTable1()
          }
        },
        {
          columns: [
            {text:'', width:'*'},
            {
              style: 'tableExample',
              table: {
                widths: [92, 146],
                body: goTable2()
              }
            }
            
          ]
        },

      ],
      // images: {
      //   building: [
      //     this.logo
      //   ]
      // },
      styles: {
        header: {
          fontSize: 30,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5]
        },
        subheader2: {
          fontSize: 20,
          bold: true,
          margin: [0, 10, 0, 5]
        },
        tableExample: {
          margin: [0, 5, 0, 15]
        },
        tableHeader: {
          bold: true,
          fontSize: 13,
          color: 'black'
        }
      }

    }

    const pdfDocGenerator = pdfMake.createPdf(dd);
    // pdfDocGenerator.print({}, window.open('', '_blank'));

    // var windowReference:any = window.open();



    pdfDocGenerator.getBlob((data) => {
      var file = new Blob([data], {type: 'application/pdf'});
      var fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    })

  }

}
