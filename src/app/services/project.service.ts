import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Project } from "../domain";
import { Observable, from } from "rxjs";
import { mergeMap, count, switchMap, map } from 'rxjs/operators';

@Injectable()
export class ProjectService {
    private readonly domain = 'projects';
    private headers = new HttpHeaders().set('Content-Type', 'application/json');
    constructor(private http: HttpClient, @Inject('BASE_CONFIG') private config: { uri: string }){

    }

    //POST /projects
    add(project: Project): Observable<Project>{
        project.id = null;
        const uri = `${this.config.uri}/${this.domain}`;
        return this.http.post<Project>(uri, JSON.stringify(project), {headers: this.headers});
    }

    //PUT /projects
    update(project: Project): Observable<Project>{
        const uri = `${this.config.uri}/${this.domain}/${project.id}`;
        const toUpdate = {
            name: project.name,
            desc: project.desc,
            coverImg: project.coverImg
        };
        return this.http.patch<Project>(uri, JSON.stringify(toUpdate), {headers: this.headers});
    }

    // DELETE /projects instead of deleting the records
    del(project: Project): Observable<Project> {
        const delTasks$ = from(project.taskLists ? project.taskLists : []).pipe(
            mergeMap(listId => this.http.delete(`${this.config.uri}/taskLists/${listId}`)),
            count()
        );
        const uri = `${this.config.uri}/${this.domain}/${project.id}`;
        return delTasks$.pipe(switchMap(_ => this.http.delete(uri).pipe(map(_ => project))));
    }

    // GET /projects
    get(userId: string): Observable<Project[]> {
        const uri = `${this.config.uri}/${this.domain}`;
        const params = new HttpParams().set('members_like', userId);
        return this.http.get<Project[]>(uri, {
            params: params,
            headers: this.headers
        });
    }
}