import { Component } from '@angular/core';

@Component({
  selector: 'app-register-login-page',
  templateUrl: './register-login-page.component.html',
  styleUrls: ['./register-login-page.component.css']
})
export class RegisterLoginPageComponent {

  login=true;

  setLoginTo(bool:boolean){
    this.login=bool
  }

}
