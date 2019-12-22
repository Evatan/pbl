import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { TaskList } from "../domain";
import { Observable, from, concat } from "rxjs";
import { mergeMap, count, switchMap, map, mapTo, reduce } from 'rxjs/operators';


@Injectable()
export class TaskListService {
    private readonly domain = 'taskLists';
    private headers = new HttpHeaders().set('Content-Type', 'application/json');
    constructor(private http: HttpClient, @Inject('BASE_CONFIG') private config: { uri: string }){

    }

    //POST /taskLists
    add(taskList: TaskList): Observable<TaskList>{
        taskList.id = null;
        const uri = `${this.config.uri}/${this.domain}`;
        return this.http.post<TaskList>(uri, JSON.stringify(taskList), {headers: this.headers});
    }

    //PUT /taskLists
    update(taskList: TaskList): Observable<TaskList>{
        const uri = `${this.config.uri}/${this.domain}/${taskList.id}`;
        const toUpdate = {
            name: taskList.name,
        };
        return this.http.patch<TaskList>(uri, JSON.stringify(toUpdate), {headers: this.headers});
    }

    // DELETE /taskLists instead of deleting the records
    del(taskList: TaskList): Observable<TaskList> {
        const uri = `${this.config.uri}/${this.domain}/${taskList.id}`;
        return this.http.delete(uri).pipe(mapTo(taskList));
    }

    // GET /taskLists
    get(projectId: string): Observable<TaskList[]> {
        const uri = `${this.config.uri}/${this.domain}`;
        const params = new HttpParams().set('projectId', projectId);
        return this.http.get<TaskList[]>(uri, { params });
    }

    swapOrder(src: TaskList, target: TaskList): Observable<TaskList[]> {
        const dragUri = `${this.config.uri}/${this.domain}/${src.id}`;
        const dropUri = `${this.config.uri}/${this.domain}/${target.id}`;
        const drag$ = this.http.patch<TaskList>(
          dragUri,
          JSON.stringify({ order: target.order }),
          { headers: this.headers }
        );
        const drop$ = this.http.patch<TaskList>(
          dropUri,
          JSON.stringify({ order: src.order }),
          { headers: this.headers }
        );
        return concat(drag$, drop$).pipe(
          reduce((r: TaskList[], x: TaskList) => [...r, x], [])
        );
      }
}