import { Component, OnInit, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from "../new-task/new-task.component";
import { MatDialogRef } from "@angular/material";
import { CopyTaskComponent } from "../copy-task/copy-task.component";
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';
import { slideToRight } from "../../anim/router.anim";

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations: [slideToRight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskHomeComponent implements OnInit {

  @HostBinding('@routeAnim')state;
  lists = [
    {
      id:1,
      name:'待办',
      order: 1,
      tasks:[
        {
          id:1,
          desc: '任务一：去星巴克买一杯咖啡,然后把它送给软件工程的老师。',
          completed: false,
          priority: 3,
          owner: {
            id:1,
            name:'谭嘉',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder:new Date(),
        },
        {
          id:2,
          desc: '任务二：去一点点买一杯奶茶',
          completed: true,
          priority: 2,
          owner: {
            id:1,
            name:'谭嘉',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder:new Date()
        },
      ]
    },
    {
      id:2,
      name:'进行中',
      order: 2,
      tasks:[
        {
          id:1,
          desc: '任务一：去星巴克买一杯咖啡',
          completed: true,
          priority: 1,
          owner: {
            id:1,
            name:'谭嘉',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder:new Date()
        },
        {
          id:2,
          desc: '任务二：去一点点买一杯奶茶',
          completed: true,
          priority: 3,
          owner: {
            id:1,
            name:'谭嘉',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder:new Date()
        },
      ]
    },
    {
      id:3,
      name:'已完成',
      order: 3,
      tasks:[
        {
          id:1,
          desc: '任务一：去星巴克买一杯咖啡',
          completed: true,
          priority: 2,
          owner: {
            id:1,
            name:'谭嘉',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder:new Date()
        },
        {
          id:2,
          desc: '任务二：去一点点买一杯奶茶',
          completed: false,
          priority: 1,
          owner: {
            id:1,
            name:'谭嘉',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder:new Date()
        }
      ]
    }
  ]


  constructor( private dialog: MatDialog, private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }
  launchNewTaskDialog(){
    const dialogRef = this.dialog.open(NewTaskComponent, {data: {title: '新建任务：'}});
  }

  launchCopyTaskDialog(){
    const dialogRef = this.dialog.open(CopyTaskComponent, {data:{lists: this.lists}});
  }

  launchTaskClickDialog(task){
    const dialogRef = this.dialog.open(NewTaskComponent, {data: {title: '修改任务：',task: task}});
  }

  launchConfirmDialog(){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: '删除任务列表', content: '确认删除任务列表及本列表中的所有任务吗？'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchEditListDialog(){
    const dialogRef = this.dialog.open(NewTaskListComponent, {data: {title: '更改列表名称'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
  launchNewListDialog(){
    const dialogRef = this.dialog.open(NewTaskListComponent, {data: {title: '新建列表'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  handleMove(srcData, list){
    switch (srcData.tag) {
      case 'task-item':
        console.log('handling item');
        break;
      case 'task-list':
        console.log('handling list');
        const srcList = srcData.data;
        const tempOrder = srcList.order;
        srcList.order = list.order;
        list.order = tempOrder;
        break;
    
      default:
        break;
    }
  }

  handleQuickTask(desc: string){
    console.log(desc);
  }
}
