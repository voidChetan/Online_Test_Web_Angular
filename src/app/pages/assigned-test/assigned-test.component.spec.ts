import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedTestComponent } from './assigned-test.component';

describe('AssignedTestComponent', () => {
  let component: AssignedTestComponent;
  let fixture: ComponentFixture<AssignedTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignedTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
