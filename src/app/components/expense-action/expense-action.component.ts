import { Component } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Transaction } from 'src/app/classes/transaction/transaction';
import { TrackerService } from 'src/app/services/tracker/tracker.service';

@Component({
  selector: 'app-expense-action',
  templateUrl: './expense-action.component.html',
  styleUrls: ['./expense-action.component.css'],
})
export class ExpenseActionComponent {
  
  private _trackerServ= new TrackerService;
  private _router= new Router;
  
  newTransaction!:Transaction;

  // a form to get expense transaction data from user
  expenseActionForm: FormGroup = new FormGroup({
    amount: new FormControl(null,[Validators.required,Validators.pattern(/[0-9]/)]),
    category: new FormControl('food and drink'),
    paymentMethod: new FormControl('in cash'),
    date: new FormControl(null,[Validators.required,this.noFutureDateValidator]),
  });

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
  handleExpenseAction() {
    if (this.expenseActionForm.valid) {
      // assigns values to a new object of type transaction 
      this.newTransaction={
      amount: this.expenseActionForm.get('amount')?.value,
      category: this.expenseActionForm.get('category')?.value,
      paymentMethod: this.expenseActionForm.get('paymentMethod')?.value,
      date: this.expenseActionForm.get('date')?.value,
      type:'expense', // gives the type expense to the transaction
      }
      // add the new transaction to the array of transactions by tracker service
      this._trackerServ.addTransaction(this.newTransaction);
    }
    this._router.navigate(['/overview']); // navigates to the overview page on submitting the form
  }
}
