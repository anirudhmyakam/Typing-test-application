import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { word } from '../word/word.component';
import { letter } from '../letter/letter.component';
import { WordsService } from '../service/data/words.service';
import { ResultMetrix } from '../results/results.component';
import { Router } from '@angular/router';
import { CommonFunctionsService } from '../service/common-functions.service';
import { BaseTypingComponent } from '../base-typing/base-typing.component';
import { ChangeDetectorRef } from '@angular/core';
import { VariablesService } from '../service/variables.service';

@Component({
  selector: 'app-just-words',
  templateUrl: './just-words.component.html',
  styleUrls: ['./just-words.component.css']
})
export class JustWordsComponent extends BaseTypingComponent{
  @ViewChild('myInput') myInput!: ElementRef;

  constructor(wordsservice:WordsService,router:Router,cdr:ChangeDetectorRef,variables:VariablesService){
    super(wordsservice,router,cdr,variables);
  }

  async ngOnInit():Promise<void>{

    await this.generateWords()
    this.current_word=this.words_bank[this.current_word_index]
    this.setTimeLimit()
    this.current_word.is_current=true
    this.current_word.value[0].is_current=true
    // this.output_word=this.current_word.value.concat(this.extra_word.value)
  }

  ngOnDestroy(): void {
    // Clear the timer when the component is destroyed
    // console.log(this.input_words_list)
    console.log(this.words_bank)
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

    public reevaluate(){

    }

  @HostListener('document:click', ['$event'])
  onClick() {
    this.myInput.nativeElement.focus();
  }




  public on_input(){
    if(this.input_word[this.input_word.length-1]==" "){
      this.changes_on_space()
      return 
    }

    if (this.is_test_started==false){
      console.log("the test started")
      this.is_test_started=true
      this.startTimer()
    }
    this.on_new_input()
  }
}
