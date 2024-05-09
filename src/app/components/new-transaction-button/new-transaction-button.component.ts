import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-new-transaction-button',
  templateUrl: './new-transaction-button.component.html',
  styleUrls: ['./new-transaction-button.component.css'],
})
export class NewTransactionButtonComponent {
  hideLabel = true;
  // a method to show label
  toggleLabel() {
    this.hideLabel = false; // show label
    setTimeout(() => {
      this.hideLabel = true; // hide label after 2 seconds
    }, 2000);
  }
}
