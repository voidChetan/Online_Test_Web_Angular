import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewQuestionListComponent } from './interview-question-list.component';

describe('InterviewQuestionListComponent', () => {
  let component: InterviewQuestionListComponent;
  let fixture: ComponentFixture<InterviewQuestionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewQuestionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewQuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
