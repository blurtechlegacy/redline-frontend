import { Component, OnInit } from '@angular/core';
import {UserProviderService} from '../user-provider.service';
import {AuthResponse} from '../auth-response';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  username: AuthResponse;
  constructor(private user: UserProviderService) { }

  ngOnInit() {
    setInterval(() => {
      this.username = this.user.getUser();
    }, 500);
  }

}
