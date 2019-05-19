import { Injectable } from '@angular/core';
import {Route} from './route';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Response } from './response';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'http://api.redline.blur.tech/routes';
  constructor(private http: HttpClient) { }
  getRoutes(city: string): Promise<Response> {
    const options = new HttpParams().set('city', city);
    return this.http.get<Response>(this.url, {params: options}).toPromise();
  }
  authorize(login: string, password: string): Promise<any> {
    const body = {
      login, password
    };
    return this.http.post(this.url + '/auth', body).toPromise();
  }
}
