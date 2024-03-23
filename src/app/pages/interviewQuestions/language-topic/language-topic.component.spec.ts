import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageTopicComponent } from './language-topic.component';

describe('LanguageTopicComponent', () => {
  let component: LanguageTopicComponent;
  let fixture: ComponentFixture<LanguageTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageTopicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
