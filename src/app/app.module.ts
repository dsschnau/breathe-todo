import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreatheRootComponent } from './breathe-root/breathe-root.component';
import {
  EnergizingBreathComponent,
} from './energizing-breath/energizing-breath.component';
import {
  EqualBreathingComponent,
} from './equal-breathing/equal-breathing.component';
import {
  ExtendedExhaleComponent,
} from './extended-exhale/extended-exhale.component';
import {
  RelaxingBreathComponent,
} from './relaxing-breath/relaxing-breath.component';
import {
  TodoItemModalComponent,
} from './todotxt-root/components/todo-item-modal/todo-item-modal.component';
import {
  TodoListComponent,
} from './todotxt-root/components/todo-list/todo-list.component';
import { TodotxtRootComponent } from './todotxt-root/todotxt-root.component';

@NgModule({
  declarations: [
    AppComponent,
    TodotxtRootComponent,
    BreatheRootComponent,
    TodoListComponent,
    ExtendedExhaleComponent,
    EqualBreathingComponent,
    EnergizingBreathComponent,
    RelaxingBreathComponent,
    TodoItemModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
