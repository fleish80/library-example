import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MainPageModule} from 'lib-main';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        MainPageModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
