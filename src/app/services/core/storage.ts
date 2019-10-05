import { Injectable } from '@angular/core';

const db = sessionStorage;

@Injectable({
  providedIn: 'root'
})
export class Storage {

  constructor() {}

  /**
   * @summary Get an item from storage
   * @param key name in which the data is stored
   * @returns stored data for the parameter
   */
  getItem(key) {
    return db.getItem(key);
  }

  /**
   * @summary Set an item to storage
   * @param key name in which the data is stored
   * @param value data to store
   */
  setItem(key, value) {
    db.setItem(key, value);
  }

  /**
   * @summary Delete an item from storage
   * @param key name in which the data is stored
   */
  deleteItem(key) {
    db.removeItem(key);
  }

  /**
   * @summary Clear all data from storage
   */
  clearDB() {
    db.clear();
  }

}
