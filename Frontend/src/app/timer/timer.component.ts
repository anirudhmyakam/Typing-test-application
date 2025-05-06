import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {
  // timer: number = 0; // Timer value in seconds
  intervalId: any;
  timer=0
  seconds=0
  minuts=0

  ngOnInit(): void {
    // Start the timer
    this.startTimer();
  }

  startTimer(): void {
    this.intervalId = setInterval(() => {
      // this.timer++;
      this.seconds++
      this.timer++
      if (this.seconds==60){
        this.minuts++
        this.seconds=0
      }

      if (this.timer==15){
        clearInterval(this.intervalId);
        this.intervalId = null;
        console.log("time stoped")
      }
    }, 1000); // Update every second
    console.log("the timer completed")
  }

  ngOnDestroy(): void {
    // Clear the timer when the component is destroyed
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
