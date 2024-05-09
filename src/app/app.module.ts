import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OverviewComponent } from './screens/overview/overview.component';
import { BudgetComponent } from './screens/budget/budget.component';
import { ReportComponent } from './screens/report/report.component';
import { BalanceComponent } from './components/balance/balance.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { ExpenseReportComponent } from './components/expense-report/expense-report.component';
import { IncomeReportComponent } from './components/income-report/income-report.component';
import { ExpenseActionComponent } from './components/expense-action/expense-action.component';
import { IncomeActionComponent } from './components/income-action/income-action.component';
import { NewTransactionComponent } from './screens/new-transaction/new-transaction.component';
import { BudgetDetailsComponent } from './components/budget-details/budget-details.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewTransactionButtonComponent } from './components/new-transaction-button/new-transaction-button.component';
import { CategorySearchPipe } from './pipes/category-search/category-search.pipe';
import { PaymentSearchPipe } from './pipes/payment-search/payment-search.pipe';
import { AmountSearchPipe } from './pipes/amount-search/amount-search.pipe';
import { DateSearchPipe } from './pipes/date-search/date-search.pipe';
import { LongPressDirective } from './directives/long-press/long-press.directive';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OverviewComponent,
    BudgetComponent,
    ReportComponent,
    BalanceComponent,
    TransactionsComponent,
    ExpenseReportComponent,
    IncomeReportComponent,
    ExpenseActionComponent,
    IncomeActionComponent,
    NewTransactionComponent,
    BudgetDetailsComponent,
    DialogComponent,
    NewTransactionButtonComponent,
    CategorySearchPipe,
    PaymentSearchPipe,
    AmountSearchPipe,
    DateSearchPipe,
    LongPressDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgChartsModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
