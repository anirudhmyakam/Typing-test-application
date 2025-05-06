import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ResultService } from '../service/data/result.service';
import { AuthservicesService } from '../service/authentication/authservices.service';
import { BaseTypingComponent } from '../base-typing/base-typing.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  template:`<p>ResultMetrix: {{ resultMetrix | json }}</p>`,
  styleUrls: ['./results.component.css']
})

export class ResultsComponent {
  // @ViewChild("ctab") ctab!: ElementRef;

  resultmetix:any;

  constructor(private resultsServices:ResultService,private auth:AuthservicesService, private router:Router){
  }

  ngOnInit(){
    this.resultmetix=history.state.resultMetrix
    this.uploadResults()

    // console.log(this.resultmetix)
  }

  isuser=true;

  uploadResults(){

    if(this.auth.isUserLogedin()){
      // console.log("uploading the results")

      this.resultmetix.user=this.auth.getUsername()
      this.isuser=true
      this.resultsServices.newResults(this.resultmetix).subscribe(
        response => {
        },
        error => {
          console.log(error)
        }
      )
    }
    else{
      this.isuser=false
    }

    
  }


  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
  if (event.key === 'Tab') {
    // console.log('Tab pressed globally');
    event.preventDefault();
    this.router.navigate(["/type"])
  }
}

  
}

export class ResultMetrix{

  accuracy:number;
  wpm:number
  user:string="";
  mode:string;
  raw:number;
  constraints:number;
  consistency:number;
  totalCharacters:number;
  correctCharacters:number;
  incorrectCharacters:number;
  extraCharacters:number;
  missedCharacters:number;
  constructor(accuracy:number,wordsperminut:number,mode:string,constraints:number,raw:number,consistency:number,
    totalCharacters:number,correctCharacters:number,incorrectCharacters:number,
    extraCharacters:number,missedCharacters:number){
    this.raw=raw
    this.consistency=consistency
    this.accuracy=accuracy;
    this.wpm=wordsperminut;
    this.mode=mode;
    this.constraints=constraints;
    this.totalCharacters=totalCharacters;
    this.correctCharacters=correctCharacters;
    this.incorrectCharacters=incorrectCharacters;
    this.extraCharacters=extraCharacters;
    this.missedCharacters=missedCharacters;
  }
}
