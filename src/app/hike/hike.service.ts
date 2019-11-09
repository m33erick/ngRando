import { Injectable } from '@angular/core';
import { Hike } from './hike';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class HikeService {

    constructor(private http: HttpClient) {
        this.getJSON().subscribe(data => {
        console.log(data);
        });
      }

      public getJSON(): Observable<any> {
        return this.http.get('/app/api/hikes.json')
      }
}
