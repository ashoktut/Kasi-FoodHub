import { Component, OnInit, ElementRef,  } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { MenuController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ProfilePage} from '../vendor/profile/profile.page';
import { Router, ActivatedRoute} from '@angular/router';
import {PostProvider } from '../../../providers/post-provider';


@Component({
  selector: 'app-vendor-admin',
  templateUrl: './vendor-admin.page.html',
  styleUrls: ['./vendor-admin.page.scss'],
})
export class VendorAdminPage implements OnInit {
  @ViewChild('barCanvas',  { static: true }) barCanvas: ElementRef;
  @ViewChild('doughnutCanvas',  { static: true }) doughnutCanvas: ElementRef;
  @ViewChild('lineCanvas',  { static: true }) lineCanvas: ElementRef;

  // tslint:disable-next-line: variable-name
  item_name = '';
  private barChart: Chart;
  private doughnutChart: Chart;
  private lineChart: Chart;
  constructor(private menu: MenuController, private modalCtrl: ModalController, private router: Router,
              private postPvdr: PostProvider,
              private actRoute: ActivatedRoute, ) { }

  ngOnInit() {

    this.actRoute.params.subscribe((data: any) => {

      this.item_name = data.name;

      console.log(data);
    });

    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Spathlo', 'Skopo', 'Pap And Wors', 'Pap', 'Marapo', 'Mogodu'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });

    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Spathlo', 'Skopo', 'Pap And Wors', 'Pap', 'Marapo', 'Mogodu'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB', '#FFCE56']
          }
        ]
      }
    });

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ],
        datasets: [
          {
            label: 'Annual Business Performance',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 45, 54, 72, 64, 88, 74],
            spanGaps: false
          }
        ]
      }
    });
  }

  createdProses() {
    return new Promise(resolve => {

      const body = {

        aksi: 'add-chart',
        item_name : this.item_name,

      };
      this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
        console.log('submit works');
      });

    });

  }

  // testing for menubar
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  async openProfile() {
    const modal = await this.modalCtrl.create({
      component: ProfilePage,
      cssClass: 'profile'
    });
    modal.present();
  }

}
