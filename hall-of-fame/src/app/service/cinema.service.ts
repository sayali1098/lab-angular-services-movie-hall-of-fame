import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CinemaService {
  url = 'http://jsonplaceholder.typicode.com/photos';
  private data: any = [];

  constructor(private http: HttpClient) {}

  getMovie(): Observable<any> {
    this.http.get(this.url).subscribe((res) => {
      this.data = res;
    });
    return this.data;
  }
}
