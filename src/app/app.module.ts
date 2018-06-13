import { BrowserModule, EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MouseDownDirective } from './mousedown.directive';

@NgModule({
  declarations: [
    AppComponent,
    MouseDownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
