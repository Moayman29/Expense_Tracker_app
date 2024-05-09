import { Injectable } from '@angular/core';
import { Budget } from 'src/app/classes/budget/budget';


@Injectable({
  providedIn: 'root'
})
// a service that handles budgets
export class BudgetService {

  constructor() { }

  // a function to add a newly made budget to session storrage
  addBudget(budget: Budget) {

    let recievedArr = this.getBudgets(); // recieves all budgets

    recievedArr.push(budget); // add the new budget to the budgets array

    const budgetsInString = JSON.stringify(recievedArr); // convert the budgets array into JSON
        
    sessionStorage.setItem('budgets',budgetsInString); // saves the budgets array in session storage
  }
   
  // a function to retrieve all budgets from session storrage
  getBudgets(): Budget[] {

    let retrievedBudgets:Budget[] = []; // declare a variable to recieve the budgets array

    const storedBudgets = sessionStorage.getItem('budgets'); // get the budgets array from session storage
    
    if(storedBudgets){
      retrievedBudgets = JSON.parse(storedBudgets!) as Budget[]; // convert JSON into object
    }
    
    return retrievedBudgets; // return the budgets
  }
}
