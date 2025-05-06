import { ChangeDetectorRef, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { BaseTypingComponent } from '../base-typing/base-typing.component';
import { word } from '../word/word.component';
import { WordsService } from '../service/data/words.service';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { letter } from '../letter/letter.component';
import { VariableBinding } from '@angular/compiler';
import { VariablesService } from '../service/variables.service';

@Component({
  selector: 'app-game-one',
  templateUrl: './game-one.component.html',
  styleUrls: ['./game-one.component.css']
})
export class GameOneComponent extends BaseTypingComponent{
  @ViewChild('myInput') myInput!: ElementRef;
  
  @HostListener('document:click', ['$event'])
  onClick() {
    this.myInput.nativeElement.focus();
  }

  constructor(wordsservice:WordsService,router:Router,cdr:ChangeDetectorRef,variables:VariablesService){
    super(wordsservice,router,cdr,variables);
  }

  override words_bank:gameWord[] = [];
  override current_word: gameWord= new gameWord([]);
  word_slide:gameWord[]=[];
  speed:number=5;
  delaylId:any;
  words_bank_index=0;
  wait_time:number=0


  async ngOnInit():Promise<void>{
    await this.generateGameWords()
    await this.generateGameWords()
    await this.generateGameWords()
    await this.generateGameWords()
    await this.generateGameWords()

    this.current_word=this.words_bank[this.current_word_index]
    // this.setTimeLimit(30)
    this.current_word.is_current=true
    this.current_word.value[0].is_current=true
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  

  wordSlidePush(){
    this.word_slide.push(this.words_bank[this.words_bank_index]);
    this.word_slide[this.word_slide.length-1].created_time=this.timer
    // for(let l=0;l<this.words_bank[this.words_bank_index].value.length;l++){
    //   console.log(this.words_bank[this.words_bank_index].value[l].value)
    // }
    this.words_bank_index++
    this.wait_time=this.timer+((this.word_slide[this.word_slide.length-1].value.length*2.4)/this.speed)*160;
  }


  private raw_wordToGameWord(raw_word:string){
      let build_word=new gameWord([])
      for (let i=0;i<raw_word.length;i++){
        build_word.value.push(new letter(raw_word[i]))
      }
      build_word.top_position=Math.random()*200+200;
      return build_word
    }
  
    public async generateGameWords(){
      const raw_words: string[] = await (this.wordsservice.theNextwords());
      for (let i = 0; i < 10; i++) {
        const raw_word = raw_words[i];
        this.words_bank.push(this.raw_wordToGameWord(raw_word));
      }
      this.total_words=this.total_words+10
    }

    public startGame(){
      this.gameTimer()
      this.is_test_started=true;
    }


  gameTimer(): void {
    this.intervalId = setInterval(() => {
      this.timer++;

      if(this.timer>0){
        this.wpmCalc()
      }
      // this.cdr.detectChanges()
      if(this.wait_time<this.timer){
        this.wordSlidePush()
      }
      let word_distance=this.speed*(Math.round((this.timer-this.word_slide[0].created_time)/100));
      let disapear_distance=Math.round(100+this.word_slide[0].value.length*4);

      if(word_distance>=100 && this.word_slide[0].is_correct==false){
        this.stopGame()
      }
    
      if(word_distance>disapear_distance){
        console.log("poped ",this.word_slide[0])
        console.log(this.word_slide.length)
        this.word_slide=this.word_slide.slice(1);
      }

      // console.log(this.word_slide.length)

    }, 10);
  }


  stopGame(){
      clearInterval(this.intervalId);
      this.word_slide=[]
      this.words_bank=[]
      this.intervalId = null;
      this.time_limit=(this.timer/100)
      this.returnResults()
      // console.log("time stoped")
  }

  public on_input(){
    if(this.input_word[this.input_word.length-1]==" "){
      this.changes_on_space()
      this.speed++
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


export class gameWord extends word{
  created_time:number=0;
  top_position: number = 0;
}
