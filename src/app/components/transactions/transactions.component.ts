import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/classes/transaction/transaction';
import { TrackerService } from 'src/app/services/tracker/tracker.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  constructor(private _trackerServ: TrackerService) {}

  transactionsTable!: Transaction[];
  // variables for search fields
  categorySearch!: string;
  paymentSearch!: string;
  amountSearch?: number;
  dateFromSearch?: Date;
  datetoSearch?: Date;
  // a method to clear the search fields
  clearFilter() {
    this.categorySearch = '';
    this.paymentSearch = '';
    this.amountSearch = undefined;
    this.dateFromSearch = undefined;
    this.datetoSearch = undefined;
  }

  ngOnInit(): void {
    this.transactionsTable = this._trackerServ.getTransactions(); // gets all transactions
  }
}
