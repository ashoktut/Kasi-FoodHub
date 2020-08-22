import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // tslint:disable-next-line: variable-name
  user_name: string;
  constructor(private router: Router ) { }

  ngOnInit() {
  }

  gotoSignup() {

      this.router.navigateByUrl('signup');

  }

}
