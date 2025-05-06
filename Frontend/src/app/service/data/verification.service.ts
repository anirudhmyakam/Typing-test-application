import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerificationService {

  constructor(private http:HttpClient) {}

  public emailVerification(otpToken:Emailotptoken){
    return this.http.post<string>(`http://localhost:8080/email-verification`,otpToken);
  }

  public VerifyOtp(otpToken:Emailotptoken){
    // console.log("in verifyservice")
    return this.http.post<boolean>(`http://localhost:8080/verify-otp`,otpToken);
  }

}

export class Emailotptoken{
  email:string;
  username:string;
  otp:string;
  constructor(email:string, username:string, otp:string){
    this.email=email;
    this.username=username;
    this.otp=otp;
  }
}
