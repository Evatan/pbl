import { Component, OnInit, Input,Output, EventEmitter, HostListener } from '@angular/core';
import { itemAnim } from "../../anim/item.anim";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [itemAnim]
})
export class TaskItemComponent implements OnInit {


  @Input() item;
  @Input() avatar;
  @Output() taskClick = new EventEmitter<void>();
  
  //定义动画初始优先级
  widerPriority = 'in'

  constructor() { }

  ngOnInit() {
    this.avatar = this.item ? this.item.owner.avatar:'unassigned'
  }

  onItemClick(){
    this.taskClick.emit();
  }

  onCheckBoxClick(ev: Event){
    ev.stopPropagation();
  }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.widerPriority = 'out';
  }
  @HostListener('mouseleave')
  onMouseLeave(){
    this.widerPriority = 'in';
  }

}
