import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from 'src/app/classes/transaction/transaction';

@Pipe({
  name: 'paymentSearch'
})
// a pipe to filter transactions by payment method
export class PaymentSearchPipe implements PipeTransform {

  transform(value: Transaction[], paymentSearch: string): Transaction[] {
    if(!paymentSearch) return value; // returns the whole transactions if the field is empty
    
    paymentSearch=paymentSearch.toLowerCase() // turns the entered payment into lowercase
    return value.filter((transaction) =>transaction.paymentMethod.toLowerCase().includes(paymentSearch)); // returns transactions with the same category
  }
}
