import { Component, OnInit } from '@angular/core';
import {FakeApiService} from '../fake-api.service';
import {Route} from '../route';
import {ApiService} from '../api.service';
import { Response } from '../response';
import {RouteManagerService} from '../route-manager.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  routeNames: string[];
  constructor(private api: ApiService, private routeMgr: RouteManagerService) { }

  async ngOnInit() {
    const arr: Response = await this.api.getRoutes('Новосибирск');
    this.routeNames = [];
    console.log(arr);
    arr.data.forEach(elem => this.routeNames.push(elem.name));
  }
  changeState(name: string) {
    this.routeMgr.toggle(name);
  }
}
