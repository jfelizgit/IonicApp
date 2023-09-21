import { Component, ViewChild, ElementRef } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage {
  
 
  @ViewChild('map',{ static: false })mapRef: ElementRef;
  map: GoogleMap;

  constructor() {this.map = <any>[],this.mapRef =<any> [] }

  ionViewDidEnter() {
    this.createMap();
  }

  async createMap() {
        
    this.map = await GoogleMap.create({
      id: 'my-map',
      apiKey: environment.mapsKey,
      element: this.mapRef.nativeElement,
      config: {
        center: {
          lat: 19.461309,
          lng: -70.704010,
        },
        zoom: 12,
      }
    });
  }

}
 

