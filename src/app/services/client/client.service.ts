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

  public getClientDetails() {
    const api = `${CONST.ENDPOINT.CLIENTS}/${this.db.getItem(CONST.LOCAL_ID)}.json`;
    return this.http.get(CONST.BASE_URL + api)
    .pipe(map(client => client));
  }
  
  public getAccountDetails(accountNumber) {
    const source = from(accountNumber);
	return source.pipe(mergeMap(res => this.mapClientDetails(res)));
  }
  
  public mapClientDetails(accountNumber){
	const accoutsApi = `${CONST.ENDPOINT.ACCOUNTS}/${accountNumber}.json`;
    return this.http.get(CONST.BASE_URL + accoutsApi).pipe(map((accDetail) => {
		accDetail = {...accDetail, accountNumber}
		return accDetail;
	}));
  }
}
