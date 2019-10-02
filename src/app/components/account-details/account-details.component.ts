import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
})
export class AccountDetailsComponent implements OnInit {
  @Input() accountNumber: string;
  @Input() balance: string;
  @Input() overdraft: string;
  
  constructor(private router: Router) { }

  ngOnInit() {}
  
  getNavigationState() {
	let navigationExtras: NavigationExtras = {
      state: {
        accountNumber: this.accountNumber,
		balance: this.balance,
		overdraft: this.overdraft,
      }
    };
	return navigationExtras;
  }
  
  navToWithdraw() {
	const navigationExtras = this.getNavigationState();
    this.router.navigate(['/withdraw'], navigationExtras);
  }
  
  navToDeposit() {
   const navigationExtras = this.getNavigationState();
   this.router.navigate(['/deposit'], navigationExtras);
  }

}
