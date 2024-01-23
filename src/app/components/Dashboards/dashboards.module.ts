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
import { AdminDashboardComponent } from './admin-dashbaord/admin-dashbaord.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserAddComponent } from './user-add/user-add.component';
import { HydrostaticFirmsComponent } from './hydrostatic-firms/hydrostatic-firms.component';
import { StateWaiverComponent } from './state-waiver/state-waiver.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { HomePage2Component } from './home-page2/home-page2.component';
import { HomePage3Component } from './home-page3/home-page3.component';
import { AdminPrivilegeComponent } from './admin-privilege/admin-privilege.component';
import { PendingUsersComponent } from './pending-users/pending-users.component';
import { UserAddingComponent } from './user-adding/user-adding.component';
import { DataRequestComponent } from './data-request/data-request.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { ComplianceComponent } from './compliance/compliance.component';
import { TrackComponent } from './track/track.component';
import { DataRequestAnswerComponent } from './data-request-answer/data-request-answer.component';
import { DataRequestQuestionComponent } from './data-request-question/data-request-question.component';
import { NotificationComponent } from './notification/notification.component';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { NotificationViewComponent } from './notification-view/notification-view.component';





@NgModule({
  declarations: [
    StatisticsComponent,
    PipelineDataComponent,
    HomePageComponent,
    AdminDashboardComponent,
    UserEditComponent,
    UserAddComponent,
    HydrostaticFirmsComponent,
    StateWaiverComponent,
    UserDashboardComponent,
    HomePage2Component,
    HomePage3Component,
    AdminPrivilegeComponent,
    PendingUsersComponent,
    UserAddingComponent,
    DataRequestComponent,
    EvaluationComponent,
    ComplianceComponent,
    TrackComponent,
    DataRequestAnswerComponent,
    DataRequestQuestionComponent,
    NotificationComponent,
    ActivityLogComponent,
    NotificationViewComponent,

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
