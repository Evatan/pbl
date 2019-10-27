import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  items = [
    {
      id:1,
      name: '谭嘉',
    },
    {
      id:2,
      name: '金磊',
    },
    {
      id:3,
      name: '张有为'
    },
    {
      id:4,
      name: '贾庆尧'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  displayUser(user: {id:string; name:string}){
    return user? user.name : '';
  }

}
