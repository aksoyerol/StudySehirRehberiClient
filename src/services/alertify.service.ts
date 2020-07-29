import { Injectable } from '@angular/core';
declare let alertify: any;
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  success(message) {
    alertify.success(message);
  }

  warning(message) {
    alertify.warning(message);
  }

  error(message) {
    alertify.error();

  }
}
