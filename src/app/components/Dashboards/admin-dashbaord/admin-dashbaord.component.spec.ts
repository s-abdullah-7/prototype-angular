import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashbaordComponent } from './admin-dashbaord.component';

describe('AdminDashbaordComponent', () => {
  let component: AdminDashbaordComponent;
  let fixture: ComponentFixture<AdminDashbaordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDashbaordComponent]
    });
    fixture = TestBed.createComponent(AdminDashbaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
