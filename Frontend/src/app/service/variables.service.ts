import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {

  constructor() { }

  timeconstraint=30
  wordconstraint=10
  mode:string="TIME"

  setTimeConstraint(constraint:number){
    this.timeconstraint=constraint
  }
  setWordConstraint(constraint:number){
    this.wordconstraint=constraint
  }

  getTimeConstraint(){
    return this.timeconstraint
  }
  getWordConstraint(){
    return this.wordconstraint
  }

  setMode(mode:string){
    this.mode=mode
  }

  getMode(){
    return this.mode
  }



}
