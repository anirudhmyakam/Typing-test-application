import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent {

  message:string="";

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.message = params['message'];
      console.log(this.message);
    });
  }
}
