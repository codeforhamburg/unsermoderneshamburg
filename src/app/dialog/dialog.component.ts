import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<DialogComponent>) { }

  ngOnInit() {
      document.getElementById('wbc-dialog-tab-container').appendChild(document.getElementsByClassName('md-tab-header')[0]);
  }

  selectTab(index){
      document.getElementsByClassName('md-dialog-container')[0].className = "md-dialog-container wbc-tab-"+index;
  }

}
