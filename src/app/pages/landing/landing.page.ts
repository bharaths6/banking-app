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
    if (this.auth.idToken) {
      this.navCtrl.navigateRoot('/home');
    } else {
      this.navCtrl.navigateRoot('/login');
    }
  }

}
