import { Component } from '@angular/core';

@Component({
  selector: 'letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent {

  value:string = "";
  is_current:boolean = false;
  is_current_wrong:boolean = false;
  is_correct:boolean = true;
  is_wrong:boolean = false;

}

export class letter{
  value:string = "";
  is_current:boolean = false;
  is_current_wrong:boolean = false;
  is_correct:boolean = false;
  is_wrong:boolean = false;

  constructor(public val:string){
    this.value=this.val
  }
}
