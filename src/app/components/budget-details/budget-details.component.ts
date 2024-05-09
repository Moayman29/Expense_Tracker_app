import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Budget } from 'src/app/classes/budget/budget';
import { TrackerService } from 'src/app/services/tracker/tracker.service';

@Component({
  selector: 'app-budget-details',
  templateUrl: './budget-details.component.html',
  styleUrls: ['./budget-details.component.css'],
})
export class BudgetDetailsComponent implements OnInit {
  constructor(private _trackerServ: TrackerService,private _spinner: NgxSpinnerService
  ) {}

  @Input() budgets!: Budget[]; // property decorated with input to be updated when a new budget is added

  budgetsCards!: Budget[];

  ngOnInit(): void {
    this._spinner.show();
    this.budgetsCards = this.budgets; // recieves all the budgets to display them
    this._spinner.hide();
  }

  // a method to compare the expense of a specific category to the target set by the budget created
  calculateProgress(budget: Budget): number {
    // filters the transactions by the range of date set in the budget for a specific category
    const filteredTransactions = this._trackerServ
      .getTransactionsByDateRange(budget.dateFrom, budget.dateTo) 
      .filter((transaction) => transaction.category === budget.budgetFor); 
      // iterates through each transaction, adds the transaction amount to the sum and assign it to the variable "total spent"
    const totalSpent = filteredTransactions.reduce(
      (sum, transaction) => sum + transaction.amount,
      0
    );
    return Math.min(totalSpent / budget.amount, 1); // returns the ratio between the total and the amount & clamp the progress to 0-1
  } 


  // a method to delete a budget 
  deleteItemFromArray<Budget>(array: Budget[], itemToDelete: Budget): boolean {
    // gets the index of the budget 
    const index = array.findIndex((element) => element === itemToDelete);  
    if (index !== -1) {
      array.splice(index, 1); // remove the item using splice
      sessionStorage.setItem('budgets', JSON.stringify(array)); // then saves the updated array to the session storage
      return true;
    } else {
      return false; // item not found
    }

  }
}
