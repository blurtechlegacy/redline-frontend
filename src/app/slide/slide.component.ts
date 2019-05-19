import { Component, OnInit } from '@angular/core';
import {FakeApiService} from '../fake-api.service';
import {Route} from '../route';
import {ApiService} from '../api.service';
import { Response } from '../response';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  routeNames: string[];
  constructor(private api: ApiService) { }

  async ngOnInit() {
    const arr: Response = await this.api.getRoutes('Новосибирск');
    this.routeNames = [];
    console.log(arr);
    arr.data.forEach(elem => this.routeNames.push(elem.name));
  }
}
