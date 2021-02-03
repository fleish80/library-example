import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildFeatComponent } from './child-feat/child-feat.component';

@NgModule({
  declarations: [ChildFeatComponent],
  exports: [ChildFeatComponent],
  imports: [
    CommonModule
  ]
})
export class ChildFeatModule { }
