import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MainPageModule} from '@demanor/lib-main/main-page';

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
