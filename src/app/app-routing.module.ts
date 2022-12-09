import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxBreathingComponent } from './box-breathing/box-breathing.component';
import { BreatheRootComponent } from './breathe-root/breathe-root.component';
import { TodotxtRootComponent } from './todotxt-root/todotxt-root.component';

const routes: Routes = [
  { path: 'box-breathing', component: BoxBreathingComponent },
  { path: 'todotxt-root', component: TodotxtRootComponent },
  { path: 'breathe-root', component: BreatheRootComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
