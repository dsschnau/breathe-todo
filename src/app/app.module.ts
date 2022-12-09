import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreatheRootComponent } from './breathe-root/breathe-root.component';
import {
  TodoAddComponent,
} from './todotxt-root/components/todo-add/todo-add.component';
import {
  TodoListComponent,
} from './todotxt-root/components/todo-list/todo-list.component';
import { TodotxtRootComponent } from './todotxt-root/todotxt-root.component';
import { ExtendedExhaleComponent } from './extended-exhale/extended-exhale.component';
import { EqualBreathingComponent } from './equal-breathing/equal-breathing.component';
import { EnergizingBreathComponent } from './energizing-breath/energizing-breath.component';
import { RelaxingBreathComponent } from './relaxing-breath/relaxing-breath.component';

@NgModule({
  declarations: [
    AppComponent,
    TodotxtRootComponent,
    BreatheRootComponent,
    TodoListComponent,
    TodoAddComponent,
    ExtendedExhaleComponent,
    EqualBreathingComponent,
    EnergizingBreathComponent,
    RelaxingBreathComponent
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
