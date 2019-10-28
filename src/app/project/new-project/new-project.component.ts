import { Component, OnInit,Inject, ChangeDetectionStrategy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
//import { OverlayContainer } from "@angular/cdk/overlay";
// import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewProjectComponent implements OnInit {

  title = ""
  constructor(
    @Inject(MAT_DIALOG_DATA) private data,
    private dialogref: MatDialogRef<NewProjectComponent>,
    //private oc: OverlayContainer
  ) {}

  ngOnInit() {
    console.log(JSON.stringify(this.data));
    this.title = this.data.title;
    //this.oc.getContainerElement().classList.add(this.data.dark ? 'myapp-dark-theme' : null);
  }

  onClick(){
    this.dialogref.close('I received your masseage!');
  }

}
