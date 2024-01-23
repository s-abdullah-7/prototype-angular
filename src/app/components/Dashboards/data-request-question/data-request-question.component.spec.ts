import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRequestQuestionComponent } from './data-request-question.component';

describe('DataRequestQuestionComponent', () => {
  let component: DataRequestQuestionComponent;
  let fixture: ComponentFixture<DataRequestQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRequestQuestionComponent]
    });
    fixture = TestBed.createComponent(DataRequestQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
