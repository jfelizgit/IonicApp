import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { Geolocation } from '@capacitor/geolocation';
import { ModalController } from '@ionic/angular';

// declare var google: any;

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage {
  @ViewChild('map')mapRef: ElementRef;
 map: GoogleMap;

  constructor(private geo: Geolocation) { this.map = <any>[], this.mapRef = <any>[] }
   
  ionViewDidEnter() {
    this.createMap();
  }

  async createMap() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.map = await GoogleMap.create({
      id: 'my-map',
      apiKey: environment.mapsKey,
      element: this.mapRef.nativeElement,
      config: {
        center: {
          lat: coordinates.coords.latitude,
          lng: coordinates.coords.longitude,
        },
        zoom: 15,
      }
    });

    this.addMarkeres();
  }
//marcadores
async addMarkeres(){
  const coordinates = await Geolocation.getCurrentPosition();
  const markers: Marker[] = [
    {
      coordinate:{lat: coordinates.coords.latitude, lng: coordinates.coords.longitude},
      title: 'Mi ubicación',
      snippet: 'algo aquí'
    }
  ];
  await this.map.addMarkers(markers);
  console.log(coordinates) // muestra el objeto marcador

  this.map.setOnMarkerClickListener(async (marker)=>{
     console.log(marker.latitude) //muestra por consola la latitud del marcador
    }) 
  }
}






// part that works

// map: GoogleMap;

//   constructor() { this.map = <any>[], this.mapRef = <any>[] }

    

//   ionViewDidEnter() {
//     this.createMap();
//   }

//   async createMap() {

//     this.map = await GoogleMap.create({
//       id: 'my-map',
//       apiKey: environment.mapsKey,
//       element: this.mapRef.nativeElement,
//       config: {
//         center: {
//           lat: 19.461309,
//           lng: -70.704010,
//         },
//         zoom: 13,
//       }
//     });
//   }



