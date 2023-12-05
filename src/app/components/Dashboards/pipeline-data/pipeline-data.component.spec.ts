import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelineDataComponent } from './pipeline-data.component';

describe('PipelineDataComponent', () => {
  let component: PipelineDataComponent;
  let fixture: ComponentFixture<PipelineDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipelineDataComponent]
    });
    fixture = TestBed.createComponent(PipelineDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
