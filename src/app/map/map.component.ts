import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {last} from 'rxjs/operators';
import {Waypoint} from '../waypoint';
import {RouteManagerService} from '../route-manager.service';

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
  public origin: string;
  public destination: string;
  condition = false;
  constructor(private api: ApiService, private routeMgr: RouteManagerService) {
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
    const lastPoint = routes[0].geos[lastIndex];
    this.origin = this.parseLocation(this.createWaypoint(this.latOrigin, this.lngOrigin));
    this.destination = this.parseLocation(this.createWaypoint(lastPoint.geo[0], lastPoint.geo[1]));
    const waypoints = routes[0].geos.slice(0, lastIndex);
    waypoints.forEach(elem => this.waypoints.push(this.createWaypoint(elem.geo[0], elem.geo[1])));
    console.log(this.origin);
    console.log(this.waypoints);
    console.log(this.destination);
    setTimeout(() => {
      this.condition = true;
    }, 400);
    this.routeMgr.add(routes[0].name);
    setInterval(() => {
      this.condition = this.routeMgr.isRouteActive(routes[0].name);
    }, 500);
  }
  createWaypoint(lat: number, lng: number): Waypoint {
    const result = new Waypoint();
    result.location = {lat, lng};
    return result;
  }
  parseLocation(point: Waypoint): string {
    return point.location.lat + ',' + point.location.lng;
  }
}
