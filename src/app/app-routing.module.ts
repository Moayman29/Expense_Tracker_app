import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './screens/overview/overview.component';
import { BudgetComponent } from './screens/budget/budget.component';
import { ReportComponent } from './screens/report/report.component';
import { NewTransactionComponent } from './screens/new-transaction/new-transaction.component';

const routes: Routes = [
  {path:"",redirectTo:'overview',pathMatch:'full'},
  {path:"overview",component:OverviewComponent,title:'Overview'},
  {path:"budget",component:BudgetComponent,title:'Budget'},
  {path:"report",component:ReportComponent,title:'Report'},
  {path:"newtransaction",component:NewTransactionComponent,title:'New Transaction'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
