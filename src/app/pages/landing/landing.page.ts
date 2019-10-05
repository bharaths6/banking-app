import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from 'src/app/services/authenticate/authenticate.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    public auth: AuthenticateService,
  ) { }

  ngOnInit() {
    // check session storage for saved id token
    if (this.auth.idToken) {
      // navigate to home when id token is added in session
      this.navCtrl.navigateRoot('/home');
    } else {
      // navigate to login when id token is not found
      this.navCtrl.navigateRoot('/login');
    }
  }

}
