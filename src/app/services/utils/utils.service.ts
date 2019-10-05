import { Injectable } from '@angular/core';
import { CONST } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
  ) {}

  /**
   * @summary Common error showing logic
   * @param errorMsg message to show when the template is invoked
   * @returns error showing template with the error message
   */
  showError(errorMsg = CONST.MESSAGES.ERROR_OCCURRED) {
    alert(errorMsg);
  }

}
