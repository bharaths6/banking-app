import { Injectable } from '@angular/core';

const db = sessionStorage;

@Injectable({
  providedIn: 'root'
})
export class Storage {

  constructor() {}

  getItem(key) {
    return db.getItem(key);
  }

  setItem(key, value) {
    db.setItem(key, value);
  }

  deleteItem(key) {
    db.removeItem(key);
  }

  clearDB() {
    db.clear();
  }

}
