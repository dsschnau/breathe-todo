import { Component } from '@angular/core';
import { trigger, transition, animate, style, state } from '@angular/animations';
import { BoxBreathing } from '../breathing-techniques/box-breathing';

@Component({
  selector: 'app-box-breathing',
  templateUrl: './box-breathing.component.html',
  styleUrls: ['./box-breathing.component.css']
})
export class BoxBreathingComponent {
  isShown = false;

  toggle() {
    this.isShown = !this.isShown;
  }
}
