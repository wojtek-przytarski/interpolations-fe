import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMoreCardComponent } from './learn-more-card.component';

describe('LearnMoreCardComponent', () => {
  let component: LearnMoreCardComponent;
  let fixture: ComponentFixture<LearnMoreCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnMoreCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnMoreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
