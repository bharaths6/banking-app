import { Injectable } from '@angular/core';
import { CONST } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
  ) {}

  showError(errorMsg = CONST.MESSAGES.ERROR_OCCURRED) {
	alert(errorMsg);
  }

}
