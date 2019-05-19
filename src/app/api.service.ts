import { Injectable } from '@angular/core';
import {Route} from './route';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Response } from './response';
import { AuthResponse } from './auth-response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'http://api.redline.blur.tech';
  constructor(private http: HttpClient) { }
  getRoutes(city: string): Promise<Response> {
    const options = new HttpParams().set('city', city);
    return this.http.get<Response>(this.url + '/routes', {params: options}).toPromise();
  }
  authorize(login: string, password: string): Observable<AuthResponse> {
    const body = {
      login, password
    };
    console.log(body);
    return this.http.post<AuthResponse>(this.url + '/users/auth', body);
  }
}
