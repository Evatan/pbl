import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from "@angular/http";
import { Observable } from 'rxjs';
import { Quote } from '../domain/quote.model';

@Injectable()
export class QuoteService {
    // private headers = new Headers({
    //     'Content-Type': 'application/json'
    // })
    constructor(private http: HttpClient, @Inject('BASE_CONFIG') private config: { uri: string }){}

    getQuote(): Observable<Quote>{
        const uri = `${this.config.uri}/quotes/${Math.floor(Math.random()*10)}`;
        return this.http.get<Quote>(uri);
    }
}