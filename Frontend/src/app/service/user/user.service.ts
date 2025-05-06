import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public register(new_user:User){
    console.log(new_user.username,new_user.password,new_user.email)
    return this.http.post(`http://localhost:8080/register`,new_user)

  }
}

export class User {

  username:string=""
  email:string=""
  password:string=""

  constructor(username:string,email:string,password:string){
    this.email=email
    this.username=username
    this.password=password

  }
  
}
