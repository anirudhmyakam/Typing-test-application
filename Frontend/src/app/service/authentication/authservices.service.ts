import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthservicesService {

  constructor(private http:HttpClient, private router:Router) { }

  login(username:string,password:string){
    console.log("login called")
    // console.log(username,password)
    var authtoken='Basic '+btoa(`${username}:${password}`)
    // console.log(authtoken)
    sessionStorage.setItem('token',authtoken)
    sessionStorage.setItem('username',username)
    return this.http.get<string>(`http://localhost:8080/authenticate`);
  }

  isUserLogedin(){
    let username=sessionStorage.getItem('username')
    if (username!=null){
      return true
    }
    return false
  }

  getAuthenticatedToken(){
    if(this.isUserLogedin()){
      return String(sessionStorage.getItem('token'))
    }
    return String('')
  }

  getUsername(){
    if(this.isUserLogedin()){
      return String(sessionStorage.getItem('username'))
    }
    return String('')
  }

  logout(){
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('token')

    this.router.navigate(["login-register/"])
  }
}
