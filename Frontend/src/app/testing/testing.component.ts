import { Component } from '@angular/core';
import { JustWordsComponent } from '../just-words/just-words.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent{

  ngOnInit():void {
      // this.fun()
  }

  constructor(private router:Router){}

  message:string=""

  passmessage(){
    this.router.navigate(['/errorpage'], { queryParams: { message: this.message } });
  }

  
  

}
