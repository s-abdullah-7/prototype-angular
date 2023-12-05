import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxEchartsModule } from 'ngx-echarts';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { ManagementRoutingModule } from './management-routing.module';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { TestChartComponent } from './test-chart/test-chart.component';


@NgModule({
  declarations: [
    EmployeeCreateComponent,
    EmployeeListComponent,
    EmployeeUpdateComponent,
    TestChartComponent

    ],
    imports: [
        CommonModule,
        ManagementRoutingModule,
        SharedModule,
        NgChartsModule,
        NgbModule,
        NgApexchartsModule,
        NgCircleProgressModule.forRoot(),
        NgSelectModule,
        NgxEchartsModule.forRoot({
            echarts: () => import('echarts')
        }),


        FormsModule,
        ReactiveFormsModule,



],
providers: [EmployeeService],
bootstrap: [AppComponent]
})
export class ManagementModule { }
