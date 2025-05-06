import { Injectable } from '@angular/core';
import { word } from '../word/word.component';
import { firstValueFrom } from 'rxjs';
import { letter } from '../letter/letter.component';
import { WordsService } from './data/words.service';

@Injectable({
  providedIn: 'root'
})
export class CommonFunctionsService {

  constructor(private wordsservice:WordsService) { }

  public change(l1:letter){
    console.log("functioning")
    l1.is_correct=true
    l1.is_wrong=true
    l1.value='x'
  }

}
