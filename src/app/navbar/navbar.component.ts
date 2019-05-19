import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {AuthResponse} from '../auth-response';

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
  constructor(private api: ApiService) { }

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
        console.log(result.data.name);
      } else {
        console.log(result);
      }
    }, 350);
  }
}
