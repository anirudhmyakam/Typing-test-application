import { Component } from '@angular/core';
import { ResultService } from '../service/data/result.service';
import { Router } from '@angular/router';
import { AuthservicesService } from '../service/authentication/authservices.service';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css']
})
export class LeaderBoardComponent {

  ngOnInit(){

    if(this.auth.isUserLogedin()==false){
      this.router.navigate(['errorpage'])
    }

    this.getleaderboard();

  }

  constructor(private results:ResultService, private router:Router, private auth:AuthservicesService){}

  mode:string="time"
  constraints:number=15;


  leaderboard:any;

  setMode(mode:string, constraints:number){
    this.mode=mode
    this.constraints=constraints
  }

  setConstraint(constraint:number){
    this.constraints=constraint
    this.getleaderboard()
  }

  getleaderboard(){

    this.results.getLeaderBoard(this.mode,this.constraints).subscribe(
      response =>{
        this.leaderboard=response
      },
      error => {
        console.log(error)
      }
    )


  }
}
