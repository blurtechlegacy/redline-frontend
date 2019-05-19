import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  login: string;
  password: string;
  constructor(private api: ApiService) { }

  ngOnInit() {
  }
  authorize() {
    const result = this.api.authorize(this.login, this.password);
    console.log(result);
  }
}
