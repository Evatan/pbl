import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material";
import { NewProjectComponent } from "../new-project/new-project.component";
import { InviteComponent } from "../invite/invite.component";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects = [
    {
      "name": "PBLSystem",
      "desc": "这是小组项目",
      "coverImg": "assets/img/covers/0.jpg"
    },
    {
      "name": "VR",
      "desc": "这是第二个小组项目",
      "coverImg": "assets/img/covers/1.jpg"
    }
  ];
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openNewProjectDialog(){
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {dark:false}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchInviteDialog(){
    this.dialog.open(InviteComponent);
  }
}
