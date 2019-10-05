import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { AccountsService } from 'src/app/services/accounts/accounts.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.page.html',
  styleUrls: ['./withdraw.page.scss'],
})
export class WithdrawPage implements OnInit {

  data: any;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router,
    private utils: UtilsService,
    private accountsService: AccountsService,
  ) {
    // fetching data/values passed as state 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state;
      }
    });
  }

  ngOnInit() {
  }

  /**
   * @summary Invoke the update account API to withdraw amount entered by client
   * @param form formData value for catching user inputs
   */
  withdraw(form) {
    const withdrawAmt = parseFloat(form.value.withdraw);
    const balance = parseFloat(this.data.balance) || 0;
    if (withdrawAmt > balance) {
      this.utils.showError('Invalid Entry');
    } else {
      const accBalance = balance - withdrawAmt;
      this.accountsService.updateAccountBalance(this.data.accountNumber, accBalance, this.data.overdraft).subscribe((res) => {
        this.navCtrl.navigateRoot('/home');
      });
    }
  }

}
