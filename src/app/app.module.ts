import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodotxtRootComponent } from './todotxt-root/todotxt-root.component';
import { BreatheRootComponent } from './breathe-root/breathe-root.component';

@NgModule({
  declarations: [
    AppComponent,
    TodotxtRootComponent,
    BreatheRootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
