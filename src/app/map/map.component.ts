import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {last} from 'rxjs/operators';
import {Waypoint} from '../waypoint';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public latOrigin: number;
  public lngOrigin: number;
  public latDestination: number;
  public lngDestination: number;
  public waypoints: any = [];
  public origin: any;
  public destination: any;
  constructor(private api: ApiService) {
    if (navigator) {
      navigator.geolocation.getCurrentPosition( pos => {
        this.lngOrigin = +pos.coords.longitude;
        this.latOrigin = +pos.coords.latitude;
      });
    }
  }

  async ngOnInit() {
    const response = await this.api.getRoutes('Новосибирск');
    const routes = response.data;
    const lastIndex = routes[0].geos.length - 1;
    const firstPoint = routes[0].geos[0];
    const lastPoint = routes[0].geos[lastIndex];
    console.log(firstPoint.geo);
    this.origin = {
      lat: firstPoint.geo[0],
      lng: firstPoint.geo[1]
    };
    this.destination = {
      lat: lastPoint.geo[0],
      lng: lastPoint.geo[1]
    };
    const waypoints = routes[0].geos.slice(1, lastIndex);
    console.log(waypoints);
    const point = waypoints[0];
    console.log(point);
    console.log(this.waypoints);
    this.waypoints.push(123);
    console.log(this.waypoints);
    console.log('Waypoints coming');
    console.log(this.waypoints);
  }
}
