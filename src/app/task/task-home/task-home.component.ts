import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
//import { NewProjectComponent } from 'src/app/project/new-project/new-project.component';
import { NewTaskComponent } from "../new-task/new-task.component";

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  lists = [
    {
      id:1,
      name:'待办',
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


  constructor( private dailog: MatDialog) { }

  ngOnInit() {
  }
  launchNewTaskDialog(){
    this.dailog.open(NewTaskComponent);
  }

}
