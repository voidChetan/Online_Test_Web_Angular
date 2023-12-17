import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuestionComponent } from './new-question.component';

describe('NewQuestionComponent', () => {
  let component: NewQuestionComponent;
  let fixture: ComponentFixture<NewQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
