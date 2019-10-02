import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { AccountsService } from 'src/app/services/accounts/accounts.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.page.html',
  styleUrls: ['./deposit.page.scss'],
})
export class DepositPage implements OnInit {

  data: any;
 
  constructor(
	private navCtrl: NavController,
	private route: ActivatedRoute,
	private router: Router,
	private utils: UtilsService,
	private accountsService: AccountsService,
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state;
      }
    });
  }

  ngOnInit() {
  }
  
  deposit(form) {
	const depositAmt = parseFloat(form.value.deposit);
	const balance = parseFloat(this.data.balance) || 0;
	if (0 > depositAmt) {
		this.utils.showError('Invalid Entry');
	} else {
		const accBalance = balance + depositAmt;
		this.accountsService.updateAccountBalance(this.data.accountNumber, accBalance, this.data.overdraft).subscribe((res => {
			this.navCtrl.navigateForward('/home');
		}));	
	}
  }

}
