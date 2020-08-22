import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-rest-apply',
  templateUrl: './rest-apply.page.html',
  styleUrls: ['./rest-apply.page.scss'],
})
export class RestApplyPage implements OnInit {
  alertCtrl: any;

  constructor(private route: Router, public atrCtrl: AlertController) { }

  ngOnInit() {
  }
  goHome() {
    this.route.navigateByUrl('/home');
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
    header: 'Low battery',
    subHeader: '10% of battery remaining',
    buttons: ['Dismiss']
   });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
}

}

