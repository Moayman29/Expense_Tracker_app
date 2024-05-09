import { Component, OnInit } from '@angular/core';
import { TrackerService } from 'src/app/services/tracker/tracker.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit{

  constructor(private _trackerServ: TrackerService){}

  totalExpense!:number;
  totalIncome!:number;
  totalAmount!:number;

  // gets total expense,income and amount to display it on the overview page
  ngOnInit(): void {
    this.totalExpense=this._trackerServ.calculateTotals().totalExpense; 
    this.totalIncome =this._trackerServ.calculateTotals().totalIncome;
    this.totalAmount=this._trackerServ.calculateTotals().totalAmount
  }

}
