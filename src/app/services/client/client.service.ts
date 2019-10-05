import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe, of, from } from 'rxjs';
import { CONST } from 'src/app/constants';
import { Storage } from 'src/app/services/core/storage';
import { map, mergeAll, tap, mergeMap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private http: HttpClient,
    private db: Storage,
  ) { }

  /**
   * @summary Builds payload and API for getting the details of client
   * @returns as Observable with client details(idToken, loginId, client name, age)
   */
  public getClientDetails() {
    const api = `${CONST.ENDPOINT.CLIENTS}/${this.db.getItem(CONST.LOCAL_ID)}.json`;
    return this.http.get(CONST.BASE_URL + api)
    .pipe(map(client => client));
  }

  /**
   * @summary Invokes account details fetching API for every account number passed as list
   * @param accountNumber list of account numbers of client
   * @returns Observable of account details
   */
  public getAccountDetails(accountNumber) {
    const source = from(accountNumber);
    return source.pipe(mergeMap(res => this.mapClientDetails(res)));
  }

  /**
   * @summary Builds payload and API for getting account number details
   * @param accountNumber account number for which details is required
   * @returns Observable account details + account number
   */
  public mapClientDetails(accountNumber) {
    const accoutsApi = `${CONST.ENDPOINT.ACCOUNTS}/${accountNumber}.json`;
    return this.http.get(CONST.BASE_URL + accoutsApi).pipe(map((accDetail) => {
      accDetail = {...accDetail, accountNumber};
      return accDetail;
    }));
  }
}
