import { Component } from '@angular/core';
import { VariablesService } from '../service/variables.service';
import { Router } from '@angular/router';
import { AuthservicesService } from '../service/authentication/authservices.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  constructor(public variables:VariablesService, public router:Router, public auth:AuthservicesService){}



  navigateToLogin(){
    this.router.navigate(["login-register/"])
  }

  navigateToParas(){
    this.router.navigate(["paras/"])
  }

  navigateToleaderboard(){
    this.router.navigate(["leaderboard/"])
  }

  navigateToUserinfo(){
    this.router.navigate(["userinfo"])
  }

  logout(){
    this.auth.logout()
  }


}

