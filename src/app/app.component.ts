import { Component, OnInit } from '@angular/core';
import { Hike } from './hike/hike';
import { HikeService } from './hike/hike.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  hikes: Hike[];
  constructor(private _hikeService: HikeService) {
 }
 ngOnInit() {
  this._hikeService.getJSON().subscribe(data => {
    console.log(data);
  });
   }
  }
