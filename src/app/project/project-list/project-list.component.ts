import { Component, OnInit, HostBinding } from '@angular/core';
import { MatDialog } from "@angular/material";
import { NewProjectComponent } from "../new-project/new-project.component";
import { InviteComponent } from "../invite/invite.component";
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { slideToRight} from "../../anim/router.anim";
import { listAnimation } from "../../anim/list.anim";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [slideToRight, listAnimation]
})
export class ProjectListComponent implements OnInit {

  @HostBinding('@routeAnim')state;
  projects = [
    {
      "id": 1,
      "name": "PBLSystem",
      "desc": "这是小组项目",
      "coverImg": "assets/img/covers/0.jpg"
    },
    {
      "id":2,
      "name": "VR",
      "desc": "这是第二个小组项目",
      "coverImg": "assets/img/covers/1.jpg"
    }
  ];
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openNewProjectDialog(){
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: "新建项目"}});
    dialogRef.afterClosed().subscribe(result => 
      {
        console.log(result);
        this.projects = [ ...this.projects,
          {id: 3, name: '一个新项目', desc: '这是一个新项目', coverImg: 'assets/img/covers/3.jpg'},
          {id: 4, name: '又一个新项目', desc: '这是另一个新项目', coverImg: 'assets/img/covers/4.jpg'}];
      });
  }

  launchInviteDialog(){
    this.dialog.open(InviteComponent);
  }

  launchUpdateDialog(){
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: "编辑项目"}});
  }

  launchConfirmDialog(project){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: "删除项目", content: "确认删除本项目，及项目中包含的所有任务吗？"}});
    dialogRef.afterClosed().subscribe(result =>{ 
      console.log(result)
      this.projects = this.projects.filter(p => p.id !== project.id);
    });
  }
}
