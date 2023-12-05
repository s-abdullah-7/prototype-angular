import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {path:"dashboard/analytics",title:"Slica-Analytics",component: AnalyticsComponent},
      {path:"dashboard/sales",title:"Slica-Sales",component: SalesComponent},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],

exports: [RouterModule]
})
export class DashboardRoutingModule { }
