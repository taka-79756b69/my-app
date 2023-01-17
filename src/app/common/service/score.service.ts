import { json, query } from 'express';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Query } from 'mongoose';

@Injectable()
export class ScoreService {

  constructor(private http: HttpClient){
  }

  getScoreList(): Observable<any>{
    // return products
    return this.http.get('/api/v1/score/')
  }

  getScore(scoreId: string): Observable<any>{
    // return products[productId]
    return this.http.get('/api/v1/score/'+ scoreId)
  }

  saveScore(scoreId: string, req: any): Observable<any>{
    // return products[productId]
    this.http.head("application/json")
    return this.http.post('/api/v1/score/'+ scoreId, req)
  }
}
