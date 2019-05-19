import {Geo} from './geo';

export class Route {
  _id: string;
  name: string;
  description: string;
  city: string;
  geos: Geo[];
}
