export class Waypoint {
  location: {
    lat: number;
    lng: number;
  };
  stopover: boolean;
  constructor() {
    this.stopover = true;
  }
}
