import { Injectable } from '@angular/core';

@Injectable()
export class MapService {

    public map;
    public clickedMarker: boolean;
    public clickedPopup;
    public openProject: boolean = false;

  constructor() { }


  flyAndTilt(lat: number, lng: number) {
      this.map.flyTo({center : [lng,lat], zoom: 17, pitch: 60});
      this.openProject = true;
  }

  flyTo(lat: number, lng: number){
      if (lat != undefined)
          this.map.flyTo({center : [lng,lat]});
  }

  moveAside(){
      let ne = this.map.getBounds().getNorthEast()
      let center = this.map.getCenter();
      let diffLat =  ne.lat - center.lat;
      let diffLng =  ne.lng - center.lng;

      this.flyTo(center.lat+diffLat/6, center.lng+diffLng/5)
  }

  resetView(){
      if(this.map.getZoom() > 13) {
          this.map.flyTo({pitch :0, zoom: 13});
      } else {
          this.map.flyTo({pitch :0});
      }
  }



}
