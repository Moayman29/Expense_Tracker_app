import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from 'src/app/classes/transaction/transaction';

@Pipe({
  name: 'dateSearch'
})
// a pipe to filter transactions by date
export class DateSearchPipe implements PipeTransform {

  transform(value: Transaction[], dateFromSearch?: Date, datetoSearch?: Date): Transaction[] {
    if(!dateFromSearch || !datetoSearch) return value; // returns the whole transactions if the field is empty
    // returns the transactions within the date range entered
    return value.filter(transaction => {
      const transactionDate = new Date(transaction.date);
      return transactionDate >= new Date(dateFromSearch) && transactionDate <= new Date(datetoSearch);
    });
  }

}
