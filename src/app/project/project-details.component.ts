import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';

import { DataService, MapService } from '../shared';

// import { Project } from './project';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectDetailsComponent implements OnInit {

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private mapService: MapService) { }

    ngOnInit() {
        this.activatedRoute.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                this.dataService.selectProject(params['id']);

                // if(this.dataService.selectedProject.hasOwnProperty('lat')){
                //     this.mapService.flyTo(this.dataService.selectedProject.lat, this.dataService.selectedProject.lng);
                // }
            }
        });
    }
      // console.log(this.dataService.getProject(1));
      // console.log(this.dataService.getProject("1"));
  //   this.route.params.forEach((params: Params) => {
  //       let id = +params['id'];
  //       this.dataService.getProject(id)
  //     .then(project => this.project = project);
  // });


}
