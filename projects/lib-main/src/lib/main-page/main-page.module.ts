import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainPageComponent} from './main-page/main-page.component';
import {MainFeatModule} from '@demanor/lib-child/src/lib/main-feat';

@NgModule({
  declarations: [MainPageComponent],
  exports: [MainPageComponent],
  imports: [
    CommonModule,
    MainFeatModule
  ]
})
export class MainPageModule {
}
