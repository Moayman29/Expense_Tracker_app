import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import { Budget } from 'src/app/classes/budget/budget';
import { BudgetService } from 'src/app/services/budget/budget.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  constructor(private _budgetServ:BudgetService){}

  @Output() close = new EventEmitter<void>();

  @Input() budgets!:Budget[];

  newBudget!:Budget;

  // form to get budget data from user
  addBudgetForm: FormGroup = new FormGroup({
    budgetName: new FormControl(null,[Validators.required,Validators.maxLength(20)]),
    amount: new FormControl(null,[Validators.required,Validators.pattern(/[0-9]/)]),
    budgetFor: new FormControl('food and drink'),
    dateFrom: new FormControl(null,[Validators.required]),
    dateTo: new FormControl(null,[Validators.required]),
  },{validators: this.dateRangeValidation('dateFrom','dateTo')})

  // custom validation to make sure that the "dateFrom" is not after "dateTo"
  dateRangeValidation(controlDate: string, secondControlDate: string):ValidatorFn {
    return (form: AbstractControl): ValidationErrors|null=>{
      const control = form.get(controlDate)?.value as Date;
      const secondControl = form.get(secondControlDate)?.value as Date;
      // compares the two dates 
      if(control < secondControl || control == secondControl) {
        return null;
      }else {
        const error = {dateRange: 'date range error'};
        return error;
      }
    }
  }

  // a method that handles data recieved from the form
  handleBudgetAction(){
    if(this.addBudgetForm.valid){
      // assign values to a new object of type budget
      this.newBudget={
      budgetName: this.addBudgetForm.get('budgetName')?.value,
      amount: this.addBudgetForm.get('amount')?.value,
      budgetFor: this.addBudgetForm.get('budgetFor')?.value,
      dateFrom: this.addBudgetForm.get('dateFrom')?.value,
      dateTo: this.addBudgetForm.get('dateTo')?.value,
      }

      // add the new budget to the array of budgets by budget service
      this._budgetServ.addBudget(this.newBudget);
      // add the new budget to the budgets displayed on the screen 
      this.budgets.push(this.newBudget);
      // then closes the dialoge
      this.onClose();
    }
  }
  // a method that closes the dialoge when called
  onClose() {
    this.close.emit();
  }

}
