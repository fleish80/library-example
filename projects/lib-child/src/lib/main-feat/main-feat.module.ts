import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFeatComponent } from './main-feat/main-feat.component';
import {ChildFeatModule} from '../child-feat/child-feat.module';

@NgModule({
  declarations: [MainFeatComponent],
  exports: [MainFeatComponent],
  imports: [
    CommonModule,
    ChildFeatModule
  ]
})
export class MainFeatModule { }
