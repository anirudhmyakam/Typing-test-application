import { Component } from '@angular/core';
import { User, UserService } from '../service/user/user.service';
import { AuthservicesService } from '../service/authentication/authservices.service';
import { Router } from '@angular/router';
import { Emailotptoken, VerificationService } from '../service/data/verification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userservices:UserService, private auth:AuthservicesService, private router:Router, private verification:VerificationService){}

  username:string=""
  email:string=""
  email_verify:string=""
  password:string=""
  password_verify:string=""
  otp:string=""
  is_email_verified:boolean=false;
  otpsent:boolean=false


  reEvaluate(){
    alert("Please ensure the form is valid")
  }

  emailVerification(){
    let otptoken=new Emailotptoken(this.email,this.username,"");
    this.verification.emailVerification(otptoken).subscribe(
      response => {
        // console.log(response)
        this.otpsent=true
      },
      error => {
        console.log(error)
      }
    )
  }

  verifyOtp(){
    // console.log()
    let otptoken = new Emailotptoken(this.email,this.username,this.otp);
    this.verification.VerifyOtp(otptoken).subscribe(
      response =>{
        this.is_email_verified=response.valueOf()
        // console.log(this.is_email_verified)
      },
      error =>{
        console.log(error)
        // a alert message that otp is wrong
      }
    )
  }




  public register(){
    let new_user=new User(this.username,this.email,this.password)
    this.userservices.register(new_user).subscribe(
      response =>{
        console.log(response)
        this.guide()
      },
      error=>{
        console.log(error)
      }
    )
    
  }

  guide(){
    this.auth.login(this.username,this.password)
    this.router.navigate(["words"])
  }

  newemail(){
    this.is_email_verified=false
    this.otpsent=false
  }

  

}
