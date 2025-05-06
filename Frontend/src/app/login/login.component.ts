import { Component } from '@angular/core';
import { AuthservicesService } from '../service/authentication/authservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private outh:AuthservicesService, private router:Router){

  }

  username:string=""
  password:string=""
  failed:boolean=false

  loging(){
    this.outh.login(this.username,this.password).subscribe(
      response =>{
        this.router.navigate(["type"])
      },
      error=>{
        console.log(error)
        window.alert("failed to login")
      }
    )
  }

}
