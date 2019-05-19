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
  public origin: Waypoint;
  public destination: Waypoint;
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
    this.origin = this.createWaypoint(this.latOrigin, this.lngOrigin);
    console.log(this.origin);
    this.destination = this.createWaypoint(lastPoint.geo[0], lastPoint.geo[1]);
    console.log(this.destination);
    const waypoints = routes[0].geos.slice(0, lastIndex);
    waypoints.forEach(elem => this.waypoints.push(this.createWaypoint(elem.geo[0], elem.geo[1])));
    console.log(this.waypoints);
  }
  createWaypoint(lat: number, lng: number): Waypoint {
    const result = new Waypoint();
    result.location = {lat, lng};
    return result;
  }
}
