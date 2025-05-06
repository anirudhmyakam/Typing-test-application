import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { VariablesService } from '../service/variables.service';

@Component({
  selector: 'app-typing-page',
  templateUrl: './typing-page.component.html',
  styleUrls: ['./typing-page.component.css']
})
export class TypingPageComponent {

  constructor(public variables:VariablesService, private router:Router, private cdr:ChangeDetectorRef){}

  mode=""

  ngOnInit(){
    this.mode=this.variables.getMode();
  }

  refreash(){
    this.router.navigate(["/test"])
  }


  // onKeyDown(event: KeyboardEvent): void {
  //   if (event.key === 'Tab') {
  //     event.preventDefault();
  //     console.log('Tab key press blocked');
  //     this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
  //       this.router.navigate([this.router.url]);
  //     });
  //   }
  // }
  

}
