import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared';

@Component({
  selector: 'wbc-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
