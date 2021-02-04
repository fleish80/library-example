import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFeatComponent } from './main-feat/main-feat.component';
import {ChildFeatModule} from '@demanor/lib-child/child-feat';

@NgModule({
  declarations: [MainFeatComponent],
  exports: [MainFeatComponent],
  imports: [
    CommonModule,
    ChildFeatModule
  ]
})
export class MainFeatModule { }
