import { Component, OnInit, ViewEncapsulation, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, MapService } from '../shared';
import { Project } from '../project';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { DialogComponent } from '../dialog';
// import * as MaterialPhotoGallery from 'material-photo-gallery';
declare var MaterialPhotoGallery:any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapComponent implements OnInit {

    dialogRef: MdDialogRef<DialogComponent>;

    private map;
    private mapboxglAccessToken = 'pk.eyJ1IjoibHVuZGVsaXVzIiwiYSI6ImNpdWljbmV4eTAwM2Uyb21kczN6bndrb2kifQ.AXS9vjUNgfpx8zrAfNT2pw';
    @ViewChild('wbcSidenav') wbcSidenav; 

    constructor(
        private router: Router, 
        private dataService: DataService, 
        private mapService: MapService,
        public dialog: MdDialog,
        public viewContainerRef: ViewContainerRef) { }


    openDialog() {
      let config = new MdDialogConfig();
      config.viewContainerRef = this.viewContainerRef;
      this.dialogRef = this.dialog.open(DialogComponent, config);
    }

    returnToNormalView() {
      this.mapService.resetView();
    }
    sidenavOpen() {
      setTimeout(function(){
            var elem = document.querySelector('.m-p-g');
            var gallery = new MaterialPhotoGallery(elem);
            var pictures = document.getElementsByClassName('m-p-g__thumbs-img');
            
            var sidebar = document.getElementById('wbc-sidenav');

            var myFunction = function(){
                sidebar.style.width = "100%";
                sidebar.scrollTop = 0;
                
                document.querySelector('.m-p-g__controls-close').addEventListener('click', function(){
                    sidebar.style.width= "50%";

                })
            }
            for (var i = 0; i < pictures.length; i++) {

                pictures[i].addEventListener('click', myFunction, false);
            }

        }, 500)
    }

    ngOnInit() {
      var that = this;
      this.openDialog();

      mapboxgl.accessToken = 'pk.eyJ1IjoibHVuZGVsaXVzIiwiYSI6ImNpdWljbmV4eTAwM2Uyb21kczN6bndrb2kifQ.AXS9vjUNgfpx8zrAfNT2pw';
      this.mapService.map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/light-v9',
          center : [9.980159, 53.547726],
          zoom: 11
      });


      this.mapService.map.on('load', function() {
            that.mapService.map.addLayer({
                'id': '3d-buildings',
                'source': 'composite',
                'source-layer': 'building',
                'filter': ['==', 'extrude', 'true'],
                'type': 'fill',
                'minzoom': 15,
                'paint': {
                    'fill-color': '#aaa',
                    'fill-extrude-height': {
                        'type': 'identity',
                        'property': 'height'
                    },
                    'fill-extrude-base': {
                        'type': 'identity',
                        'property': 'min_height'
                    },
                    'fill-opacity': .6
                }
            });
        });

      this.dataService.projects.subscribe();

      this.mapService.map.on('moveend', function(){
        // that.mapService
        if(that.mapService.openProject ) {
          that.wbcSidenav.open();
          that.mapService.moveAside();
          that.mapService.openProject = false;
        }
        // if(that.mapService.clickedPopup != undefined){

        //   let popupRect = that.mapService.clickedPopup._content.getBoundingClientRect();
        //   let mapRect   = that.mapService.map._container.getBoundingClientRect();
        //   if (popupRect.bottom > mapRect.bottom ){
        //       let bounds = that.mapService.map.getBounds();
        //       let diff = bounds._ne.lat - bounds._sw.lat;
        //       let center = that.mapService.map.getCenter();

        //       center.lat -= diff/3;
        //       that.mapService.flyTo(center.lat, center.lng); 

        //   }
        //   that.mapService.clickedPopup = undefined;
        // }
      })
  }

}
