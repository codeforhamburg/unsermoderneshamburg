import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared';

@Component({
  selector: 'app-empty-project',
  templateUrl: './empty-project.component.html',
  styleUrls: ['./empty-project.component.scss']
})
export class EmptyProjectComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
