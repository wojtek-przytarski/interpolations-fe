import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntegerInputComponent } from './integer-input/integer-input.component';
import { FormsModule } from '@angular/forms';
import { SimpleNavbarComponent } from './simple-navbar/simple-navbar.component';

@NgModule({
    declarations: [IntegerInputComponent, SimpleNavbarComponent],
  exports: [
    IntegerInputComponent,
    SimpleNavbarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ProjectCommonModule { }
