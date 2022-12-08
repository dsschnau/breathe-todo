import { Component, OnInit } from '@angular/core';

class BreathState {
  public fullness: number = 0
}

@Component({
  selector: 'app-breathe-root',
  templateUrl: './breathe-root.component.html',
  styleUrls: ['./breathe-root.component.css']
})
export class BreatheRootComponent implements OnInit {

  protected breathState:BreathState = new BreathState();

  ngOnInit(): void {
    this.breathState = {
      fullness: 0,
    };
  }

  protected start(): void {
    this.inhale(4);
  }

  protected hold(seconds: number) {
    setTimeout(() => {
      if(this.breathState.fullness <= 0) {
        this.inhale(4);
      } else {
        this.exhale(4);
      }
    }, 1000*seconds);
  }

  protected inhale(seconds: number): void {
    this.breathState.fullness = 0;
    let interval = 10/seconds;
    let intervalId = setInterval(() => {
      this.breathState.fullness += interval;
      if (this.breathState.fullness > 100) {
        clearInterval(intervalId);
        this.hold(4);
      }
    }, 100)
  }
  
  protected exhale(seconds: number): void {
    this.breathState.fullness = 100;
    let interval = 10/seconds;
    let intervalId = setInterval(() => {
      this.breathState.fullness -= interval;
      if (this.breathState.fullness < 0) {
        clearInterval(intervalId);
        this.hold(4);
      }
    }, 100)
  }
}
