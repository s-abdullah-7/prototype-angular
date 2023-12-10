import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HydrostaticFirmsComponent } from './hydrostatic-firms.component';

describe('HydrostaticFirmsComponent', () => {
  let component: HydrostaticFirmsComponent;
  let fixture: ComponentFixture<HydrostaticFirmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HydrostaticFirmsComponent]
    });
    fixture = TestBed.createComponent(HydrostaticFirmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
