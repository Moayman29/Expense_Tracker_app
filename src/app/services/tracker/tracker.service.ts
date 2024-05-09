import { Injectable } from '@angular/core';
import { Transaction } from '../../classes/transaction/transaction';

@Injectable({
  providedIn: 'root'
})
// a service that handles transactions
export class TrackerService {
  
  constructor() { }
  // a function to add a newly made transaction to session storrage
  addTransaction(transaction: Transaction) {

    let recievedArr = this.getTransactions(); // recieves all transactions

    recievedArr.push(transaction); // add the new transaction to the transactions array
    
    const transactionsInString = JSON.stringify(recievedArr); // convert the transactions array into JSON
    
    console.log('json trans', transactionsInString);
    
    sessionStorage.setItem('transactions',transactionsInString); // saves the transactions array in session storage
  }
   
  // a function to retrieve all transactions from session storrage
  getTransactions(): Transaction[] {

    let retrievedTransactions:Transaction[] = []; // declare a variable to recieve the transactions array

    const storedTransactions = sessionStorage.getItem('transactions'); // get the transactions array from session storage

    if(storedTransactions){
      retrievedTransactions = JSON.parse(storedTransactions!) as Transaction[]; // convert JSON into object
    }
    return retrievedTransactions; // return the transactions
  }

  // a method to calculate expenses, income & total balance
  calculateTotals(): { totalExpense: number, totalIncome: number, totalAmount: number } {

    let totalExpense = 0;
    let totalIncome = 0;
    // loop through the transactions array to get the amount of each transaction and get their sum
    for (const transaction of this.getTransactions()) {
      if (transaction.type === 'expense') {
        totalExpense += transaction.amount;
      } else {
        totalIncome += transaction.amount;
      }
    }

    const totalAmount = totalIncome - totalExpense; // subtracts the total expense from the total income to get the balance
    
    return { totalExpense, totalIncome, totalAmount };
  }

  // a method to get transactions within a specific date range
  getTransactionsByDateRange(startDate: Date, endDate: Date): Transaction[] {
    
    return this.getTransactions().filter(transaction => {
      const transactionDate = new Date(transaction.date);
      
      return transactionDate >= new Date(startDate) && transactionDate <= new Date(endDate);
    });
  }

}
