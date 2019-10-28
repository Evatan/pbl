import { Component, OnInit, Input, EventEmitter, Output, HostBinding, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { cardAnim } from "../../anim/card.anim";

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  
  animations:[
    cardAnim
    // 导入动画模板
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectItemComponent implements OnInit {

  @Input() item;
  @Output() onInvite = new EventEmitter<void>();
  @Output() onEdit = new EventEmitter<void>();
  @Output() onDel = new EventEmitter<void>();
  @HostBinding('@card') cardState = 'out';

  constructor() { }

  ngOnInit() {
  }
  
  //监听鼠标事件
  @HostListener('mouseenter')
  onMouseEnter(){
    this.cardState = 'hover';
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.cardState = 'out';
  }

  onInviteClick(){
    this.onInvite.emit();
  }

  onEditClick(){
    this.onEdit.emit();
  }

  onDelClick(){
    this.onDel.emit();
  }
}
