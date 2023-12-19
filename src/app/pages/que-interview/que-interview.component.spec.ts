import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueInterviewComponent } from './que-interview.component';

describe('QueInterviewComponent', () => {
  let component: QueInterviewComponent;
  let fixture: ComponentFixture<QueInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueInterviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
