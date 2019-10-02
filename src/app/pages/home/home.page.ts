import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client/client.service';
import { AccountsService } from 'src/app/services/accounts/accounts.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  clientDetails = {
	name: '- -',
	age: '- -'
  };
  clientAccountDetails = [];
  accountDetails = {
	accountNumber: '1',
	balance: '9',
	overdraft: '8'
  }
  constructor(
    private clientService: ClientService,
	private accountsService: AccountsService,
  ) {}
  
  ngOnInit() {
  }
  
  ionViewWillEnter() {
	this.getClientDetails();
  }

  getClientDetails() {
    this.clientService.getClientDetails().subscribe((client: any) => {
	  this.clientDetails = client;
	  this.getAccountDetails(client.accounts);
    });
  }
  
  getAccountDetails(accounts) {
	this.clientAccountDetails = [];
	this.accountsService.accounts = accounts;
	this.clientService.getAccountDetails(accounts).subscribe((accountDetails) => {
		this.clientAccountDetails.push(accountDetails);
	});
  }
  
  createAccount() {
	const accNumber = Math.floor(100000 + Math.random() * 900000);
	const confirm = window.confirm(`Create new account as #${accNumber} ??`);
	if (confirm) {
		this.accountsService.addAccount(accNumber).subscribe((accounts)=> {
			this.getAccountDetails(accounts);
		});
	}
  }
}
