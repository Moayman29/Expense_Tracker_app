import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseReportComponent } from './expense-report.component';

describe('ExpenseReportComponent', () => {
  let component: ExpenseReportComponent;
  let fixture: ComponentFixture<ExpenseReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseReportComponent]
    });
    fixture = TestBed.createComponent(ExpenseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
