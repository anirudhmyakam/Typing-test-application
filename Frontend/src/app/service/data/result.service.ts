import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultMetrix } from 'src/app/results/results.component';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http:HttpClient) { }

  public newResults(results:ResultMetrix):Observable<string>{
    // console.log("its called")
    return this.http.post<string>(`http://localhost:8080/results`,results)
  }

  public fetchMetaData(username:string){
    return this.http.get(`http://localhost:8080/metadata/${username}`)
  }

  public getLeaderBoard(mode:string, constraints:number){
    return this.http.get(`http://localhost:8080/leaderboard/${mode+"-"+constraints}`)
  }
}
