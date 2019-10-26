import { Component, OnInit } from '@angular/core';

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
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
