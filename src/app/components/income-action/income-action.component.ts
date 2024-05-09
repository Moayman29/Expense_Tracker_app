import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Transaction } from 'src/app/classes/transaction/transaction';
import { TrackerService } from 'src/app/services/tracker/tracker.service';

@Component({
  selector: 'app-income-action',
  templateUrl: './income-action.component.html',
  styleUrls: ['./income-action.component.css']
})
export class IncomeActionComponent {

  private _trackerServ= new TrackerService;
  private _router= new Router;  

  newTransaction!:Transaction;

  // a form to get income transaction data from user
  incomeActionForm: FormGroup = new FormGroup({
    amount: new FormControl(null,[Validators.required,Validators.pattern(/[0-9]/)]),
    category: new FormControl('salary'),
    paymentMethod: new FormControl('in cash'),
    date: new FormControl(null,[Validators.required,this.noFutureDateValidator]),
  })

  // custom validation to make sure that the date entered is not in future
  noFutureDateValidator(control: AbstractControl): ValidationErrors | null {
    const today = new Date();
    const enteredDate = new Date(control.value);
    // compares date entered to current date
    if (enteredDate.getTime() > today.getTime()) {
      return { noFutureDate: true };
    }
    return null;
  }

  // a method that handles data recieved from the form
  handleIncomeAction() {
    if (this.incomeActionForm.valid) {
      // assigns values to a new object of type transaction
      this.newTransaction={
      amount: this.incomeActionForm.get('amount')?.value,
      category: this.incomeActionForm.get('category')?.value,
      paymentMethod: this.incomeActionForm.get('paymentMethod')?.value,
      date: this.incomeActionForm.get('date')?.value,
      type:'income', // gives the type income to the transaction
      }
      // add the new transaction to the array of transactions by tracker service
      this._trackerServ.addTransaction(this.newTransaction);
    }
    this._router.navigate(['/overview']); // navigates to the overview page on submitting the form
  }
}
