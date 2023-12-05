import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { NgChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxEchartsModule } from 'ngx-echarts';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { PipelineDataComponent } from './pipeline-data/pipeline-data.component';
import { StatisticsComponent } from './Program-Status/statistics/statistics.component';
import { DashboardsRoutingModule } from './dashboards-routing.module';
import { HomePageComponent } from './home-page/home-page.component';




@NgModule({
  declarations: [
    StatisticsComponent,
    PipelineDataComponent,
    HomePageComponent

    ],
    imports: [
        CommonModule,
        SharedModule,
        NgChartsModule,
        DashboardsRoutingModule,
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
providers: [],
bootstrap: [AppComponent]
})
export class DashboardsModule { }
