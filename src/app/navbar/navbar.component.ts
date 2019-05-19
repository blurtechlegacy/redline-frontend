import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {AuthResponse} from '../auth-response';
import {UserProviderService} from '../user-provider.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  login: string;
  password: string;
  authorized = false;
  name: string;
  constructor(private api: ApiService, private user: UserProviderService) { }

  ngOnInit() {
  }
  async authorize() {
    let result;
    this.api.authorize(this.login, this.password).subscribe(r => result = r);
    setTimeout(() => {
      console.log(result);
      if (result.success) {
        this.authorized = true;
        this.name = result.data.name;
        this.user.setUser(result);
      } else {
        console.log(result);
      }
    }, 600);
  }
  register() {
    let result;
    this.api.register(this.login, this.password).subscribe(r => result = r);
    setTimeout(() => {
      console.log(result);
      if (result.success) {
        this.authorized = true;
        this.name = result.data.name;
        this.user.setUser(result);
      } else {
        console.log(result);
      }
    }, 1000);
  }
}
