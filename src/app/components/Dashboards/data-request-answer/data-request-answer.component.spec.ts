import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRequestAnswerComponent } from './data-request-answer.component';

describe('DataRequestAnswerComponent', () => {
  let component: DataRequestAnswerComponent;
  let fixture: ComponentFixture<DataRequestAnswerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRequestAnswerComponent]
    });
    fixture = TestBed.createComponent(DataRequestAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
