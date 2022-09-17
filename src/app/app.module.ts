import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app.routing.module";
import {Summary} from "./Summary/summary.component";
import {Navigator} from "./Navigator/navigator.component";

@NgModule({
  declarations: [
    AppComponent,
    Summary,
    Navigator
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
