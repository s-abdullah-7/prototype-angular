import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPrivilegeComponent } from './admin-privilege.component';

describe('AdminPrivilegeComponent', () => {
  let component: AdminPrivilegeComponent;
  let fixture: ComponentFixture<AdminPrivilegeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPrivilegeComponent]
    });
    fixture = TestBed.createComponent(AdminPrivilegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
