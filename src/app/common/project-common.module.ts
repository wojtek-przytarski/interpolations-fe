import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntegerInputComponent } from './integer-input/integer-input.component';
import { FormsModule } from '@angular/forms';
import { SimpleNavbarComponent } from './simple-navbar/simple-navbar.component';
import { LearnMoreCardComponent } from './learn-more-card/learn-more-card.component';

@NgModule({
    declarations: [IntegerInputComponent, SimpleNavbarComponent, LearnMoreCardComponent],
  exports: [
    IntegerInputComponent,
    SimpleNavbarComponent,
    LearnMoreCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ProjectCommonModule { }
