import { Injectable } from '@angular/core';
import {Route} from './route';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {
  constructor() { }
  getRoutes(): Observable<Route[]> {
    const routes: Route[] = [];
    const route = new Route();
    route.name = 'Kek';
    routes.push(route);
    route.name = 'Pek';
    routes.push(route);
    return of(routes);
  }
}
