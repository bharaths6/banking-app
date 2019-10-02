import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate/authenticate.service';
import { Auth } from 'src/app/models/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private authService: AuthenticateService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  login(formVal) {
    this.authService.login(formVal.value).subscribe((data: Auth) => {
      this.authService.idToken = data.idToken;
      this.authService.localId = data.localId;
      this.navCtrl.navigateRoot('/home');
    });
  }

}
