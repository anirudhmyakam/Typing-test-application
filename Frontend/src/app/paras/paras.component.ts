import { Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { TestingComponent } from '../testing/testing.component';
import { BaseTypingComponent } from '../base-typing/base-typing.component';
import { WordsService } from '../service/data/words.service';
import { Router } from '@angular/router';
import { word } from '../word/word.component';
import { ChangeDetectorRef } from '@angular/core';
import { letter } from '../letter/letter.component';
import { VariablesService } from '../service/variables.service';

@Component({
  selector: 'app-paras',
  templateUrl: './paras.component.html',
  styleUrls: ['./paras.component.css']
})
export class ParasComponent extends BaseTypingComponent {
  @ViewChild('myInput') myInput!: ElementRef;
  @ViewChildren('displayedword') displayedWords!: QueryList<ElementRef>;

  constructor(wordsservice:WordsService, router:Router, cdr:ChangeDetectorRef,variables:VariablesService){
    super(wordsservice,router,cdr,variables);
  }

  sentence_scroll=0;
  previous_y:number=0;
  previous_scroll=false;

  async ngOnInit(){
    await this.generateWords()
    this.current_word=this.words_bank[this.current_word_index]
    this.setTimeLimit()
    this.current_word.is_current=true
    this.current_word.value[0].is_current=true
    this.previous_y=this.getCoordinates(0);
  }

  ngOnDestroy(): void {
    // console.log(this.words_bank)
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  @HostListener('document:click', ['$event'])
  onClick() {
    if(!this.isFocused){

      this.myInput.nativeElement.focus();
    }
    // console.log(this.sentence_scroll)
    // this.getCoordinates()
  }


  // fillVisibeWords(){

  //   console.log("fill called")
  //   for(let i=0;i<4;i++){
  //     this.visible_words.push(this.words_bank[this.visible_words_index])
  //     this.visible_words_index++;
  //   }
  //   // await this.delay()
  //   this.cdr.detectChanges()
  //   let line_y=this.getCoordinates(this.visible_words_index-1)
  //   let present_y=line_y
  //   while(present_y<=line_y){
  //     // console.log("in while")
  //     this.visible_words.push(this.words_bank[this.visible_words_index])
  //     this.visible_words_index++;
  //     this.cdr.detectChanges()
  //     present_y=this.getCoordinates(this.visible_words_index-1)
  //   }

  //   this.visible_words.pop()
  //   this.visible_words_index--;
  // }

  getCoordinates(index:number): number {
    // console.log(this.displayedWords)
    const wordsArray = this.displayedWords.toArray();
    const crntword = wordsArray[index]
    const rect = crntword.nativeElement.getBoundingClientRect();
    const y = rect.y;
    // console.log("current word y : "+y)
    return y;
  }


  public on_input(){
    if(this.input_word[this.input_word.length-1]==" "){
      this.changes_on_space()
      let current_y=this.getCoordinates(this.current_word_index)
      if(current_y>this.previous_y){
        if(this.previous_scroll){
          this.sentence_scroll-=(current_y-this.previous_y);
        }
        this.previous_scroll=true
        this.cdr.detectChanges();
      }
      this.previous_y=current_y;
      return 
    }
      

    if (this.is_test_started==false){
      this.is_test_started=true
      this.startTimer()
    }
    this.on_new_input()
  }

}
