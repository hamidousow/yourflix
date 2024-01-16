import { Injectable, inject } from '@angular/core';
import { LocalService } from '../localstorage-service/local.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  local = inject(LocalService)
  isAuthenticated!: boolean

  constructor() { }

  login() {
    if(this.local.getData('user')) {
      return this.isAuthenticated = true;
    }

    return this.isAuthenticated = false;
  }
}
