import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MiscService {
  constructor(private httpClient: HttpClient) {}

  getWeather(): Observable<object> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
}
