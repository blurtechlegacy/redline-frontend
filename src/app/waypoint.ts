export class Waypoint {
  location: {
    lat: number;
    lng: number;
  };
  stopover: boolean;
  constructor(lat: number, lng: number) {
    this.location.lat = lat;
    this.location.lng = lng;
    this.stopover = true;
    console.log(this);
  }
}
