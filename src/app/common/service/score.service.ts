import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

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
}
