import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxBreathingComponent } from './box-breathing/box-breathing.component';
import { BreatheRootComponent } from './breathe-root/breathe-root.component';
import { EnergizingBreathComponent } from './energizing-breath/energizing-breath.component';
import { EqualBreathingComponent } from './equal-breathing/equal-breathing.component';
import { ExtendedExhaleComponent } from './extended-exhale/extended-exhale.component';
import { RelaxingBreathComponent } from './relaxing-breath/relaxing-breath.component';
import { TodotxtRootComponent } from './todotxt-root/todotxt-root.component';

const routes: Routes = [
  { path: 'todotxt-root', component: TodotxtRootComponent },
  { path: 'breathe-root', component: BreatheRootComponent,
    children: [
      { path: 'box-breathing', component: BoxBreathingComponent },
      { path: 'extended-exhale', component: ExtendedExhaleComponent },
      { path: 'equal-breathing', component: EqualBreathingComponent },
      { path: 'energizing-breath', component: EnergizingBreathComponent },
      { path: 'relaxing-breath', component: RelaxingBreathComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
