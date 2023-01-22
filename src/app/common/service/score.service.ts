import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class ScoreService {

  constructor(private http: HttpClient){
  }

  getScoreList(): Observable<any>{
    // return products
    return this.http.get('/api/v1/score/')
  }

  getScoreListNewOne(): Observable<any>{
    // return products
    return this.http.get('/api/v1/score/sort')
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

  newInsert(req: any): Observable<any>{
    // return products[productId]
    this.http.head("application/json")
    return this.http.post('/api/v1/score/', req)
  }

  deleteScore(scoreId: string): Observable<any>{

    return this.http.post('/api/v1/score/delete/'+ scoreId, scoreId)
  }
}
