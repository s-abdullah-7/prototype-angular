import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePage3Component } from './home-page3.component';

describe('HomePage3Component', () => {
  let component: HomePage3Component;
  let fixture: ComponentFixture<HomePage3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage3Component]
    });
    fixture = TestBed.createComponent(HomePage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
