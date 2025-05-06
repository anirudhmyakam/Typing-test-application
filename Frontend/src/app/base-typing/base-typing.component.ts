import { Component } from '@angular/core';
import { word } from '../word/word.component';
import { letter } from '../letter/letter.component';
import { firstValueFrom, max, min, sequenceEqual } from 'rxjs';
import { WordsService } from '../service/data/words.service';
import { ResultMetrix } from '../results/results.component';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { VariablesService } from '../service/variables.service';
import { AuthservicesService } from '../service/authentication/authservices.service';


@Component({
  selector: 'app-base-typing',
  templateUrl: './base-typing.component.html',
  styleUrls: ['./base-typing.component.css']
})
export class BaseTypingComponent {

  constructor(public wordsservice:WordsService, public router:Router, public cdr:ChangeDetectorRef, public variables:VariablesService){}

  input_word=""
  words_bank:word[]=[];
  current_word_index=0
  current_word=new word([]);
  total_words=0
  correct_words=0
  wrong_letters=0
  input_words_list:string[]=[]
  seconds=0
  minuts=0
  timer=0
  intervalId: any;
  time_limit=0
  is_test_started=false
  previous_input_length=0
  isFocused: boolean = false;
  space=new letter(" ");
  
  total_keystrokes=0
  total_charecters:number=0;
  correct_charecters=0;
  incorrect_charecters=0;
  extra_charecters=0;
  missed_charecters=0;
  accuracy=0;
  raw=0;
  wpm=0;
  consistancy=0;
  wpmlist:number[]=[]


  setTimeLimit(){   
    this.time_limit=this.variables.getTimeConstraint();
    this.seconds=this.time_limit%60
    this.minuts=Math.floor(this.time_limit/60)
    this.cdr.detectChanges()
  }

  wpmCalc(){
    // console.log("inside the calc, timer : "+this.timer)
    this.raw=(this.total_keystrokes*60)/(this.timer*5);
    this.accuracy=(this.correct_charecters/this.total_keystrokes)*100
    this.wpm=this.raw*(this.accuracy/100)

    this.wpmlist.push(this.raw)
  }

  consistancyCalc(){
    // console.log("in consistancy")
    // this.wpmCalc()
    let sum=0;
    for(let num of this.wpmlist){
      sum=sum+num
    }
    let mean=sum/this.wpmlist.length

    let sqursum=0
    for(let num of this.wpmlist){
      let diff=num-mean
      sqursum=sqursum+(diff)*(diff)
    }
    let deviation = Math.sqrt(sqursum/this.wpmlist.length)
    // console.log(sum,this.wpmlist.length, mean,sqursum,deviation)
    this.consistancy=100-(deviation/mean)*100
    // console.log("consistancy : "+this.consistancy)
  }

  public returnResults(){

    this.consistancyCalc()

    this.wrong_letters=this.incorrect_charecters+this.extra_charecters+this.missed_charecters;
    let constraints=0;
    if(this.variables.getMode()=="TIME"){
      constraints=this.variables.getTimeConstraint();
    }
    else if(this.variables.getMode()=="WORDS"){
      constraints=this.variables.getWordConstraint();
    }
    // let raw=0;
    let resultsmetrix=new ResultMetrix(this.accuracy,this.wpm,this.variables.getMode(),constraints,this.raw,this.consistancy, this.total_charecters,
      this.correct_charecters, this.incorrect_charecters, this.extra_charecters,
      this.missed_charecters
    )
    this.router.navigate(['results'],{state:{ resultMetrix: resultsmetrix}})
  }

  startTimer(): void {
    // console.log("timer started")
    this.intervalId = setInterval(() => {

      
      if (this.seconds==0){
        this.minuts--
        this.seconds=60
      }
      this.timer++;
      this.seconds--


      if(this.timer>0){
        this.wpmCalc()
      }

      if (this.timer==this.time_limit){
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.returnResults()
      }


    }, 1000); // Update every second
  }

  public raw_wordToWord(raw_word:string){
    let build_word=new word([])
    for (let i=0;i<raw_word.length;i++){
      build_word.value.push(new letter(raw_word[i]))
    }
    return build_word
  }

  public async generateWords(){
    const raw_words: string[] = await (this.wordsservice.theNextwords());
    for (let i = 0; i < 30; i++) {
      const raw_word = raw_words[i];
      this.words_bank.push(this.raw_wordToWord(raw_word));
    }
    this.total_words=this.total_words+10
  }

  public async changes_on_space(){
    // console.log(this.input_word.length,this.current_word.value.length)

    this.total_keystrokes++;
    this.correct_charecters++;

    let missed=0
    for(let j=this.input_word.length-1;j<this.current_word.value.length;j++){
      this.current_word.value[j].is_wrong=true;
      missed++;
    }
    
    this.current_word.is_correct=true;
    for(let i=0;i<this.current_word.value.length;i++){
      this.current_word.is_correct=this.current_word.is_correct && this.current_word.value[i].is_correct
    }
    if(this.current_word.is_correct){
      this.correct_words++
    }

    this.missed_charecters=this.missed_charecters+missed;

    this.input_word=this.input_word.trim()

    if(this.input_word===""){
      return
    }

    if(this.space.is_current){
      this.space.is_current=false
    }
    else{
      this.current_word.value[this.input_word.length].is_current=false
    }
    this.current_word.is_current=false
    this.current_word_index++
    this.input_words_list.push(this.input_word)
    this.current_word=this.words_bank[this.current_word_index]
    this.current_word.value[0].is_current=true
    this.current_word.is_current=true
    this.input_word=""
    this.previous_input_length=0
    if (this.total_words-this.current_word_index<=20){
      this.generateWords()
    }
  }

  public on_new_input(){
    this.input_word=this.input_word.trim()
    if (this.previous_input_length>=this.input_word.length){
      return
    }

    this.total_keystrokes++;

    if (this.input_word.length<=this.current_word.value.length){
      this.current_word.value[this.input_word.length-1].is_current=false
      if (this.input_word.length==this.current_word.value.length){
        this.space.is_current=true
      }
      else{
        this.current_word.value[this.input_word.length].is_current=true
      }
    if ( this.input_word[this.input_word.length-1] == this.current_word.value[this.input_word.length-1].value){
      this.current_word.value[this.input_word.length-1].is_correct=true
      this.current_word.value[this.input_word.length-1].is_wrong=false
      this.correct_charecters++
    }
    else{
      this.current_word.value[this.input_word.length-1].is_wrong=true
      this.current_word.value[this.input_word.length-1].is_correct=false
      // this.current_word.is_wrong=true
      this.incorrect_charecters++
    }
  }
  else{
      this.extra_charecters++
      let tl=new letter(this.input_word[this.input_word.length-1])
      this.current_word.set_extra_word(tl)
      // this.output_word=this.current_word.value.concat(this.extra_word.value)
    
  }
}

public on_backspace(event: KeyboardEvent){
  if(event.key!=='Backspace'){
    return
  }
  this.input_word=this.input_word.trim()

  if(this.input_word.length==0 && this.current_word_index>0 && this.current_word.value[0].is_correct==false && this.current_word.value[0].is_wrong==false){
    this.current_word.value[0].is_current=false
    this.current_word.is_current=false
    this.current_word_index--
    this.current_word=this.words_bank[this.current_word_index]
    this.current_word.is_current=true
    this.input_word=this.input_words_list[this.current_word_index]
    if(this.input_word.length<this.current_word.value.length){
      this.current_word.value[this.input_word.length].is_current=true
      for(let i=this.input_word.length;i<this.current_word.value.length;i++){
        this.current_word.value[i].is_correct=false
        this.current_word.value[i].is_wrong=false
      }
    }
    else{
      this.space.is_current=true
    }
  }
  else if (this.current_word.extra_charecters.length>0){
    this.current_word.extra_charecters.pop()
  }

  else{
    if(this.space.is_current){
      this.space.is_current=false
      this.current_word.value[this.input_word.length].is_current=true
      this.current_word.value[this.input_word.length].is_correct=false
      this.current_word.value[this.input_word.length].is_wrong=false
    }
    else{
      this.current_word.value[this.input_word.length+1].is_current=false
      this.current_word.value[this.input_word.length].is_current=true
      this.current_word.value[this.input_word.length].is_correct=false      
      this.current_word.value[this.input_word.length].is_wrong=false
    }
  }
  this.previous_input_length=this.input_word.length
}

public async reStart(){
  console.log("restarting")
  this.words_bank=[]
  clearInterval(this.intervalId);
  this.intervalId = null;
  this.timer=0
  this.setTimeLimit()
  await this.generateWords()
  console.log(this.words_bank)
  this.current_word_index=0
  this.input_word=""
  this.input_words_list=[]
  this.total_words=0
  this.correct_words=0
  this.correct_charecters=0
  this.wrong_letters=0
  this.is_test_started=false
  this.total_charecters=0;
  this.correct_charecters=0;
  this.incorrect_charecters=0;
  this.extra_charecters=0;
  this.missed_charecters=0;
  this.previous_input_length=0
  this.wpm=0;
  this.accuracy=0;
  this.raw=0;
  this.consistancy=0;
  this.wpmlist=[];
  this.total_keystrokes=0;
  this.current_word=this.words_bank[this.current_word_index]
  this.current_word.value[0].is_current=true
}

// public onTab(event: KeyboardEvent){

//   if(event.key!='Tab'){
//     return 
//   }
//   event.preventDefault();
//   console.log("tab works")
//   this.cdr.detectChanges()
//   this.reStart()
// }

// public onKeydown(event: KeyboardEvent){
//   if(event.key==='Backspace'){
//     this.on_backspace(event)
//   }

//   if(event.key==='Tab'){
//     event.preventDefault();
//     this.onTab()
//   }
// }


async delay(secs: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
      console.log("in delay")
    }, secs * 1000); // Convert seconds to milliseconds
  });
}

onFocus() {
  this.isFocused = true;

}

async onBlur() {
  this.isFocused = false
}


}
