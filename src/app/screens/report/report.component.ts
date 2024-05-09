import { Component } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  expenseChosen = true;
  incomeChosen = false;
  // a method to display expense report
  choseExpense(){
    this.expenseChosen= true;
    this.incomeChosen = false;
  }
  // a method to display income report
  choseIncome(){
    this.incomeChosen= true;
    this.expenseChosen= false;
  }
}
