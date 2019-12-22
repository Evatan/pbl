import { Component, OnInit, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from "@angular/material";
import { NewProjectComponent } from "../new-project/new-project.component";
import { InviteComponent } from "../invite/invite.component";
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { slideToRight} from "../../anim/router.anim";
import { listAnimation } from "../../anim/list.anim";
import { ProjectService } from 'src/app/services/project.service';
import { Observable } from 'rxjs';
import { range } from 'rxjs';
import { map, take, switchMap, reduce, filter, subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [slideToRight, listAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent implements OnInit {

  @HostBinding('@routeAnim')state;
  projects;
  // [
  //   {
  //     "id": 1,
  //     "name": "PBLSystem",
  //     "desc": "这是小组项目",
  //     "coverImg": "assets/img/covers/0.jpg"
  //   },
  //   {
  //     "id":2,
  //     "name": "VR",
  //     "desc": "这是第二个小组项目",
  //     "coverImg": "assets/img/covers/1.jpg"
  //   }
  // ];
  constructor(
    private dialog: MatDialog, 
    private cd:ChangeDetectorRef, 
    private service$: ProjectService) { }

  ngOnInit() {
    this.service$.get("1").subscribe(projects => {
      this.projects = projects;
      this.cd.markForCheck();
    });
  }

  openNewProjectDialog(){
    const selectedImg = `/assets/img/covers/${Math.floor(Math.random() * 40)}_tn.jpg`;
    const thumbnails$ = this.getThumbnails();
    const dialogRef = this.dialog.open(
      NewProjectComponent, 
      {data: {thumbnails: thumbnails$, img: selectedImg}});
      
    dialogRef.afterClosed().pipe(
      filter(n => n),
      map(val => ({...val, coverImg: this.buildImgSrc(val.coverImg)})),
      switchMap(v => this.service$.add(v))
      ).subscribe(project => {
        this.projects = [...this.projects, project];
        this.cd.markForCheck();
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
      this.cd.markForCheck();
    });
  }

  private getThumbnails(): Observable<string[]> {
    return range(0, 40).pipe(
      map(i => `/assets/img/covers/${i}_tn.jpg`),
      reduce((r: string[], x: string) => {
        return [...r, x];
      }, [])
    );
  }

  private buildImgSrc(img: string): string {
    return img.indexOf('_') > -1 ? img.split('_', 1)[0] + '.jpg' : img;
  }
}
