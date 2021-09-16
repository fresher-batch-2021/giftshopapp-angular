import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as L from 'leaflet';
@Component({
  selector: 'app-user-location',
  templateUrl: './user-location.component.html',
  styleUrls: ['./user-location.component.less']
})
// export class UserLocationComponent implements OnInit {
export class UserLocationComponent implements AfterViewInit{
  private map:any;
  constructor(private activatedRoute:ActivatedRoute) { }

  //=====================

  // ngOnInit(): void {
    // alert(this.activatedRoute.snapshot.paramMap.get('id'))
  // }
  // ==============
  

  private initMap(): void {
    this.map = L.map('map', {
      center: [12.958461353418748, 80.13670505038623],
      zoom: 3
    });
    // this.map = L.map('mapid').setView([12.958461353418748, 80.13670505038623], 13);
  const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    minZoom: 3,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });

  tiles.addTo(this.map);

}
  ngAfterViewInit():void{
    this.initMap();
  }
 
}
