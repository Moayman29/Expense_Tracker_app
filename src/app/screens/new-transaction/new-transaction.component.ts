import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css']
})
export class NewTransactionComponent implements OnInit{

  constructor(private _spinner:NgxSpinnerService){}

  ngOnInit(): void {
    this._spinner.show(); // loading screen 

    setTimeout(() => {
      this._spinner.hide();
    }, 1000);
  }

  expenseActionChosen = true;
  incomeActionChosen = false;
  // a method to show the expense transaction form
  choseExpenseAction(){
    this.expenseActionChosen= true;
    this.incomeActionChosen = false;
  }
  // a method to show the income transaction form
  choseIncomeAction(){
    this.incomeActionChosen= true;
    this.expenseActionChosen= false;
  }

}
