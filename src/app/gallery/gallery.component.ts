import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Project } from '../project';
import { DataService } from '../shared';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'wbc-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit, OnChanges {

    @Input() project: Project;
    private images;

    constructor(private dataService: DataService, private sanitizer: DomSanitizer) { }

    ngOnInit() {
        var that = this;

        this.images = this.dataService.getImageData()[(this.project.id)];
        // setTimeout(function(){
        //     var elem = document.querySelector('.m-p-g');
        //     var gallery = new MaterialPhotoGallery(elem);
        //     var pictures = document.getElementsByClassName('m-p-g__thumbs-img');
            
        //     var sidebar = document.getElementById('wbc-sidenav');

        //     var myFunction = function(){
        //         sidebar.style.width = "100%";
        //         sidebar.scrollTop = 0;
                
        //         document.querySelector('.m-p-g__controls-close').addEventListener('click', function(){
        //             sidebar.style.width= "50%";

        //         })
        //     }
        //     for (var i = 0; i < pictures.length; i++) {
        //         pictures[i].addEventListener('click', myFunction, false);
        //     }

        // }, 1000)



    }

    ngOnChanges(changes: SimpleChanges){
         this.images = this.dataService.getImageData()[(this.project.id)];
        //  var that = this;
        // console.log(this.images)
        // setTimeout(function(){
        //     var elem = document.querySelector('.m-p-g');
        //     var gallery = new MaterialPhotoGallery(elem);
        //     var pictures = document.getElementsByClassName('m-p-g__thumbs-img');
            
        //     var sidebar = document.getElementById('wbc-sidenav');

        //     var myFunction = function(){
        //         sidebar.style.width = "100%";
        //         sidebar.scrollTop = 0;
                
        //         document.querySelector('.m-p-g__controls-close').addEventListener('click', function(){
        //             sidebar.style.width= "50%";

        //         })
        //     }
        //     for (var i = 0; i < pictures.length; i++) {
        //         pictures[i].addEventListener('click', myFunction, false);
        //     }

        // }, 1000)

    }
        // document.querySelector('.m-p-g__thumbs-img').on('click', function(){
        //     console.log("yooo")
        // })

    sanitize(url:string){
        return this.sanitizer.bypassSecurityTrustUrl(url);
    }

}
