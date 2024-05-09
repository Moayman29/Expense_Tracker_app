import { Component, OnInit } from '@angular/core';
import { Budget } from 'src/app/classes/budget/budget';
import { BudgetService } from 'src/app/services/budget/budget.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css'],
})
export class BudgetComponent implements OnInit {
  constructor(
    private _budgetServ: BudgetService,
    private _spinner: NgxSpinnerService
  ) {}

  showDialog = false; 
  budgets!: Budget[];

  ngOnInit(): void {
    this._spinner.show();
    this.budgets = this._budgetServ.getBudgets(); // gets all the budgets to display them
    setTimeout(() => {
      this._spinner.hide();
    }, 1000);
  }

  // a method that makes the dialog appear when called
  openDialog() {
    this.showDialog = true;
  }
  // a method that makes the dialog disappear when called
  handleCloseDialog() {
    this.showDialog = false;
  }
}
