import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from 'src/app/services/core/storage';
import { CONST } from 'src/app/constants';
import { Auth } from 'src/app/models/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(
    private http: HttpClient,
    private db: Storage,
  ) { }

  get idToken() {
    return this.db.getItem(CONST.ID_TOKEN);
  }

  set idToken(token) {
    this.db.setItem(CONST.ID_TOKEN, token);
  }

  get localId() {
    return this.db.getItem(CONST.LOCAL_ID);
  }

  set localId(token) {
    this.db.setItem(CONST.LOCAL_ID, token);
  }

  login(userInput): Observable<Auth> {
    const payload = { ...userInput, returnSecureToken : true };

    return this.http.post(CONST.LOGIN_URL, payload)
    .pipe(map((res: Auth) => res));
  }

}
