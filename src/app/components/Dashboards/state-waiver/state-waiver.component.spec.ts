import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateWaiverComponent } from './state-waiver.component';

describe('StateWaiverComponent', () => {
  let component: StateWaiverComponent;
  let fixture: ComponentFixture<StateWaiverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StateWaiverComponent]
    });
    fixture = TestBed.createComponent(StateWaiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
