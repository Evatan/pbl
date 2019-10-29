import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Observable } from "rxjs";

export interface DragData{
  tag:string; //标识唯一拖拽
  data:any; //传递的数据
}

@Injectable()
export class DragDropService {

  private _dragData = new BehaviorSubject<DragData | null>(null);

  setDragData(data: DragData) {
    this._dragData.next(data);
  }

  getDragData(): Observable<DragData | null> {
    return this._dragData.asObservable();
  }

  clearDragData() {
    this._dragData.next(null);
  }
}
