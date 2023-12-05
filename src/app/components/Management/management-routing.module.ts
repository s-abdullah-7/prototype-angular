import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { TestChartComponent } from './test-chart/test-chart.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {path:"employee/create",title:"Add Employee",component: EmployeeCreateComponent},
      {path:"employee/table",title:"Employee Table",component: EmployeeListComponent},
      {path:"employee/update",title:"Employee Table",component: EmployeeUpdateComponent},
      {path:"employee/chart",title:"Employee Table",component: TestChartComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],

exports: [RouterModule]
})
export class ManagementRoutingModule { }
