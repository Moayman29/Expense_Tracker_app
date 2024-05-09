import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeReportComponent } from './income-report.component';

describe('IncomeReportComponent', () => {
  let component: IncomeReportComponent;
  let fixture: ComponentFixture<IncomeReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncomeReportComponent]
    });
    fixture = TestBed.createComponent(IncomeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
