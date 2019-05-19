import { Injectable } from '@angular/core';
import {AuthResponse} from './auth-response';

@Injectable({
  providedIn: 'root'
})
export class UserProviderService {
  username: AuthResponse;
  constructor() { }
  setUser(name: AuthResponse) {
    this.username = name;
  }
  getUser(): AuthResponse {
    return this.username;
  }
}
