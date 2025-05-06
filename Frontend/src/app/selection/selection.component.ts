import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { BaseTypingComponent } from '../base-typing/base-typing.component';
import { WordsService } from '../service/data/words.service';
import { JustWordsComponent } from '../just-words/just-words.component';
import { VariablesService } from '../service/variables.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent {
  constructor(public variables:VariablesService, private router:Router){}


  changeModeTo(mode:string){
    this.variables.setMode(mode)
    this.router.navigate(["type"])
  }

  //   @HostListener('document:keydown', ['$event'])
  //   handleKeyboardEvent(event: KeyboardEvent) {
  //   if (event.key === 'Tab' && event.shiftKey) {
  //     this.router.navigate(["/testing"])
  //     console.log('Tab pressed globally');
  //     event.preventDefault();
  //     this.router.navigate(["/type"])
  //   }
  // }
}
