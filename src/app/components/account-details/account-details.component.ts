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

  /**
   * @summary Get the account details as a state variable (for route communication)
   * @returns state data as json with account details
   */
  getNavigationState() {
    const navigationExtras: NavigationExtras = {
        state: {
          accountNumber: this.accountNumber,
          balance: this.balance,
          overdraft: this.overdraft,
        }
      };
    return navigationExtras;
  }

  /**
   * @summary Navigate to withdraw page, with the data for routing page
   */
  navToWithdraw() {
    const navigationExtras = this.getNavigationState();
    this.router.navigate(['/withdraw'], navigationExtras);
  }

  /**
   * @summary Navigate to deposit page, with the data for routing page
   */
  navToDeposit() {
   const navigationExtras = this.getNavigationState();
   this.router.navigate(['/deposit'], navigationExtras);
  }

}
