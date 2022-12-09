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

@NgModule({
  declarations: [
    AppComponent,
    TodotxtRootComponent,
    BreatheRootComponent,
    TodoListComponent,
    TodoAddComponent
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
