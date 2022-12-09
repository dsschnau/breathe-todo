import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BoxBreathing } from '../breathing-techniques/box-breathing';
import { EnergizingBreath } from '../breathing-techniques/energizing-breath';
import { EqualBreathing } from '../breathing-techniques/equal-breathing';
import { ExtendedExhale } from '../breathing-techniques/extended-exhale';
import { RelaxingBreath } from '../breathing-techniques/relaxing-breath';
import { BreathState } from '../breathing-techniques/breath-state';

@Component({
  selector: 'app-breathe-root',
  templateUrl: './breathe-root.component.html',
  styleUrls: ['./breathe-root.component.css']
})
export class BreatheRootComponent implements OnInit {

  protected focus: BoxBreathing = new BoxBreathing();
  protected relieveStress: ExtendedExhale = new ExtendedExhale();
  protected becomePresent: EqualBreathing = new EqualBreathing();
  protected energize: EnergizingBreath = new EnergizingBreath();
  protected unwind: RelaxingBreath = new RelaxingBreath();

  protected breathState:BreathState = new BreathState();

  ngOnInit(): void {
  }

  startFocus(): void {
    this.breathState = this.focus.breathState;
    this.focus.start();
  }

  startRelieveStress(): void {
    this.breathState = this.relieveStress.breathState;
    this.relieveStress.start();
  }

  startBecomePresent(): void {
    this.breathState = this.becomePresent.breathState;
    this.becomePresent.start();
  }

  startEnergize(): void {
    this.breathState = this.energize.breathState;
    this.energize.start();
  }

  startUnwind(): void {
    this.breathState = this.unwind.breathState;
    this.unwind.start();
  }
}
