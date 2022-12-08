import { Component, OnInit } from '@angular/core';
import { BoxBreathing } from '../breathing-techniques/box-breathing';
import { EnergizingBreath } from '../breathing-techniques/energizing-breath';
import { EqualBreathing } from '../breathing-techniques/equal-breathing';
import { ExtendedExhale } from '../breathing-techniques/extended-exhale';
import { RelaxingBreath } from '../breathing-techniques/relaxing-breath';

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

  ngOnInit(): void {
  }

  startFocus(): void {
    this.focus.start();
  }

  startRelieveStress(): void {
    this.relieveStress.start();
  }

  startBecomePresent(): void {
    this.becomePresent.start();
  }

  startEnergize(): void {
    this.energize.start();
  }

  startUnwind(): void {
    this.unwind.start();
  }
}
