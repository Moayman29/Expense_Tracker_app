import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from 'src/app/classes/transaction/transaction';

@Pipe({
  name: 'categorySearch'
})
// a pipe to filter transactions by category
export class CategorySearchPipe implements PipeTransform {
 
  transform(value: Transaction[], categorySearch: string): Transaction[] {
    if(!categorySearch) return value; // returns the whole transactions if the field is empty
    
    categorySearch=categorySearch.toLowerCase(); // turns the entered category into lowercase
    return value.filter((transaction) =>transaction.category.toLowerCase().includes(categorySearch)); // returns transactions with the same category
  }
}
