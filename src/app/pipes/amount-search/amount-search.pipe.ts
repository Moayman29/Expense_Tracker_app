import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from 'src/app/classes/transaction/transaction';

@Pipe({
  name: 'amountSearch'
})
// a pipe to filter transactions by amount
export class AmountSearchPipe implements PipeTransform {

  transform(value: Transaction[], amountSearch?: number): Transaction[] {
    if(!amountSearch) return value; // returns the whole transactions if the field is empty
  
    let amountInString= amountSearch.toString(); // turns the amount into string
    return value.filter((transaction) =>transaction.amount.toString().includes(amountInString)); // returns transactions with the same amount
  }

}
