import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ErrorSrcModule } from 'cc-error-src';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ErrorSrcModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
