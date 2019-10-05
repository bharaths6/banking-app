import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONST } from 'src/app/constants';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Storage } from 'src/app/services/core/storage';
import { AuthenticateService } from 'src/app/services/authenticate/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(
    private http: HttpClient,
    private db: Storage,
    private authService: AuthenticateService,
  ) { }

  get accounts() {
    return this.db.getItem(CONST.ACCOUNTS);
  }

  set accounts(accounts) {
    this.db.setItem(CONST.ACCOUNTS, accounts);
  }

  /**
   * @summary Builds payload and API for updating the account details of client
   * @param accNumber account number to be updated
   * @param currentBalance updated balance to be updated
   * @param overdraft amount to be updated as overdraft
   * @returns Observable
   */
  updateAccountBalance(accNumber, currentBalance, overdraft) {
    const payload = {
      balance: currentBalance,
      overdraft,
    };
    const updateAPI = `${ CONST.ENDPOINT.ACCOUNTS }/${ accNumber }.json`;
    return this.http.put(CONST.BASE_URL + updateAPI, payload).pipe(map( res => res));
  }

  /**
   * @summary Builds payload and API for adding the account details of client
   * @param accNumber account number to added
   * @returns Observable
   */
  addAccount(accNumber) {
    const localId = this.authService.localId;
    const accountsArray = this.accounts.split(',');
    accountsArray.push(String(accNumber));
    const addAccountApi = `${ CONST.ENDPOINT.CLIENTS }/${ localId + CONST.ENDPOINT.ACCOUNTS }.json`;
    return this.http.put(CONST.BASE_URL + addAccountApi, accountsArray);
  }
}
