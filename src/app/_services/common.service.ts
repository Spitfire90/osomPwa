import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Route } from '../models/route';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  // Temporarly hardcoded
  apiService = 'http://localhost:58360/api/MyService/';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getTestResponse() {
    return this.http.get<string>(`${this.apiService}/Hello Server !`, { headers: this.getHeaders() });
  }

  getRoutesForSync(sleep: number): Observable<Route[]> {

    const params = new HttpParams().set('sleep', sleep.toString());
    // return this.http.get<Route[]>(`${this.apiService}/GetDataForSync`, { headers: this.getHeaders(), params: params });

    return this.http.get<Route[]>(`${this.apiService}/GetDataForSync`, { headers: this.getHeaders(), params: params })
    .pipe(map(data => data.map(item => Route.mapOne(item))));

    /*return this.http.get<Route[]>(`${this.apiService}/GetDataForSync`, { headers: this.getHeaders(), params: params })
      .map(x => Route.mapOne(x) as Route),
      (error) => console.log(error)
    );*/
  }

  // Temporarly - should be moved to interceptor
  getHeaders(): HttpHeaders {
    return new HttpHeaders()
      .set('Authorization', this.authenticationService.authorizationHeader())
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json');
  }
}
