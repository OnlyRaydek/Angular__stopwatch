import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StopwatchComponent } from './app.component';

@NgModule({
  declarations: [
    StopwatchComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [StopwatchComponent]
})

export class AppModule { }
