import { Injectable } from '@angular/core';
import {AppComponent} from './app.component';
import {MapComponent} from './map/map.component';

@Injectable({
  providedIn: 'root'
})
export class RouteManagerService {
  pairs: Pair[];
  constructor() {
    this.pairs = [];
  }
  add(name: string) {
    const pair = new Pair();
    pair.key = name;
    pair.value = false;
    this.pairs.push(pair);
  }
  toggle(name: string) {
    const id = this.pairs.findIndex(s => s.key === name);
    this.pairs[id].value = !this.pairs[id].value;
  }
  isRouteActive(name: string): boolean {
    return this.pairs.find(s => s.key === name).value;
  }
}

export class Pair {
  key: string;
  value: boolean;
}
