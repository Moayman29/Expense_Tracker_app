import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/dist';
import { NgxSpinnerService } from 'ngx-spinner';
import { Transaction } from 'src/app/classes/transaction/transaction';
import { TrackerService } from 'src/app/services/tracker/tracker.service';

@Component({
  selector: 'app-income-report',
  templateUrl: './income-report.component.html',
  styleUrls: ['./income-report.component.css']
})
export class IncomeReportComponent implements OnInit{

  constructor(
    private _trackerServ: TrackerService,
    private _spinner: NgxSpinnerService
  ) {}

  transactionsArr!: Transaction[];
  chartData: any = {};
  descendingLabelsArr!:string[];
  
  canvas!:any;

  ngOnInit(): void {
    this._spinner.show();
    this.transactionsArr = this._trackerServ.getTransactions(); // gets all transactions
    setTimeout(() => {
      this._spinner.hide();
    }, 1000);
    
    this.prepareChartData();
    this.canvas = document.getElementById('transactionChartIncome') as HTMLCanvasElement;

    if (this.canvas) {
      const canvasContect = this.canvas.getContext('2d');
      // sets the chart configuration
      new Chart(canvasContect!, {
        type: 'doughnut',
        data: this.chartData,
        responsive: true,
        maintainAspectRatio: true, 
      });
    } 
  }

  // a method to set the data displayed in the chart
  prepareChartData() {
    // sorting transactions by amount in descending order
    this.transactionsArr.sort((a, b) => b.amount - a.amount);
    // group transactions by category and sum their amounts
    let categoryAmounts: Record<string, number> = {};

    for (const transaction of this.transactionsArr) {
      if(transaction.type==='income'){
        const category = transaction.category;
        const amount = transaction.amount;
        categoryAmounts[category] = (categoryAmounts[category] || 0) + amount;
      }
    }
    // get category labels and data for the largest category
    const categoryLabels = Object.keys(categoryAmounts);
    const categoryValues = Object.values(categoryAmounts);
    // get the names of the top 3 categories
    const top3Labels = categoryLabels.filter((_, i) => i < 3);
    this.descendingLabelsArr=top3Labels;

    // chart data
    this.chartData = {
      labels: categoryLabels, //labels
      datasets: [
        {
          data: categoryValues, //values
        },
      ],
    };
  }


}
