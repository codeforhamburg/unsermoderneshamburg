import { Component, OnInit, Input, ElementRef, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../project';
import { MapService, DataService } from '../shared';


@Component({
    selector: 'wbc-marker',
    templateUrl: './marker.component.html',
    styleUrls: ['./marker.component.scss'],
      encapsulation: ViewEncapsulation.None

})
export class MarkerComponent implements OnInit {

    @Input() project: Project;
    @Input('wbcSidenav') wbcSidenav;
    private clickedPopup;

    constructor(private elementRef: ElementRef, private mapService: MapService, private dataService: DataService, private router: Router) { }

    ngOnInit() {
        let that = this;
        let el = this.elementRef.nativeElement;
        let imageUrl = this.dataService.getImageData()[this.project.id][0].medium;
        // { offset: {bottom: [0,-10], top: [0,10]} } offset bugged atm
        let popup = new mapboxgl.Popup().setHTML(
            "<md-card class='wbc-popup-card'>"+
                "<img md-card-image src='"+imageUrl+"'>"+
                "<md-card-title>"+this.project.name+"</md-card-title>"+
                "<md-card-content><p>"+this.project.teaser+"</p></md-card-content>"+
                "<md-card-actions align='end'><button md-button>MEHR</button>"+
            "</md-card>"             
         )

        let marker = new mapboxgl.Marker(el, {offset: [-10 / 2, -12]})
            .setLngLat([this.project.lng, this.project.lat])
            .setPopup(popup)
            .addTo(this.mapService.map);

        el.addEventListener('mouseover', function(){
           that.router.navigate(['/karte/projekte/',that.project.id]);
           that.dataService.selectProject(that.project.id);
           marker.togglePopup();
           // that.wbcSidenav.open();
           that.mapService.clickedPopup = popup;
        });

        el.addEventListener('mouseout', function(){
           marker.togglePopup();
        });

        el.addEventListener('click', function() {
            that.dataService.selectProject(that.project.id);
            that.mapService.flyAndTilt(that.dataService.selectedProject.lat, that.dataService.selectedProject.lng);
            marker.togglePopup();
        })
    }

}
