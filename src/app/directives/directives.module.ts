import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyForScreenDirective } from './only-for-screen.directive';



@NgModule({
  declarations: [OnlyForScreenDirective],
  imports: [
    CommonModule
  ],
  exports: [
    OnlyForScreenDirective
  ]
})
export class DirectivesModule { }
