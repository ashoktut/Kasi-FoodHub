import { Injectable } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  saveInvoice(item) {
    this.checkItems();
    const items: any = this.getItems();
    const index = items.findIndex(e => e.id === item.id);
    if (index === -1) {
      items.push(item);
      this.saveItems(items);
    }
  }

  saveItemExist(item) {
    const items = this.getItems() as any;
    const index = items.findIndex(e => e.id === item.id);
    if (index !== -1 ) {
      items.splice(index, 1, item);
      this.saveItems(items);
    }
  }
  getItem(id) {
    const items = this.getItems() as any;
    const item = items.find(e => e.id === id);
    return item;
  }

  deleteItem(index) {
    const items = this.getItems() as any;
    items.splice(index, 1);
    this.saveItems(items);
  }

  getItems() {
    return JSON.parse(localStorage.getItem('invoices'));
  }

  checkItems() {
    const items = [];
    if (!localStorage.getItem('invoices')) {
      localStorage.setItem('invoices', JSON.stringify(items));
    }
  }

  saveItems(items) {
    localStorage.setItem('invoices', JSON.stringify(items));
  }

  uniqueID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      // tslint:disable-next-line: no-bitwise
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  print(invo, boo) {

    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    const title = boo ? 'INVOICE' : 'QUOTE';
    const company = JSON.parse(localStorage.getItem('company'));
    const mydate = new Date(invo.date).toUTCString().substr(0, 17);


    const goTable1 = () => {

      const formatter = new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'ZAR',
        minimumFractionDigits: 2
      });

      const rows = [];
      rows.push(['Item', 'Description', 'Price']);
      invo.items.map((item, index) => {
        rows.push([`# ${index + 1}`, item.description, `${formatter.format(item.price)}`]);
      });

      return rows;

    };
    const goTable2 = () => {

      const formatter = new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'ZAR',
        minimumFractionDigits: 2
      });

      const taxes = (invo.tax * invo.total) / 100;
      const subtotal = formatter.format(invo.total);
      const tax = invo.tax === 0 ? 0 : formatter.format( taxes );
      const total = formatter.format(invo.total + taxes);

      const rows = [
        ['Subtotal', subtotal],
        [`Tax %${invo.tax}`, tax],
        [ { text: 'Total', style: 'subheader', color: '#264A7B'},
          { text: total, style: 'subheader', color: '#264A7B'}
        ]
      ];
      return rows;

    };

    const dd = {

      content: [

        {columns: [

          { width: 300, text: `${company.name}`, style: 'subheader2', color: '#264A7B'},
          // { width: 180, image: this.logo },
          { width: '*', text: ' '},
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
              { width: 300, text: `Number ${boo ? 'Invoice' : 'Quote'}`, style: 'subheader', color: '#264A7B'},
              { width: 300, text: `# ${invo.numberInvoice}`},
              { width: 300, text: `Date`, style: 'subheader', color: '#264A7B'},
              { width: 300, text: `${mydate}`}
            ]

          ]
        },
        { width: 300, text: `${boo ? 'Bill' : 'Quote'} to`, style: 'subheader', color: '#264A7B'},
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
            {text: '', width: '*'},
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

    };

    const pdfDocGenerator = pdfMake.createPdf(dd);
    // pdfDocGenerator.print({}, window.open('', '_blank'));

    // var windowReference:any = window.open();



    pdfDocGenerator.getBlob((data) => {
      const file = new Blob([data], {type: 'application/pdf'});
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    });

  }

}
