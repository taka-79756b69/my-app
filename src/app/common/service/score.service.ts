import { json } from 'express';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Injectable()
export class ScoreService {

  constructor(private http: HttpClient){}

  getScoreList(): Observable<any>{
    // return products
    return this.http.get('/api/v1/score/')
  }

  getScore(scoreId: string): Observable<any>{
    // return products[productId]
    return this.http.get('/api/v1/score/'+ scoreId)
  }

  saveScore(scoreId: string, scorelist: any): Observable<any>{
    // return products[productId]
    return this.http.post('/api/v1/score/'+ scoreId, JSON.stringify( scorelist ))
  }
}
