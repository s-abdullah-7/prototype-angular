import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsComponent } from './Program-Status/statistics/statistics.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePage2Component } from './home-page2/home-page2.component';
import { HomePage3Component } from './home-page3/home-page3.component';
import { AdminDashboardComponent } from './admin-dashbaord/admin-dashbaord.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserAddComponent } from './user-add/user-add.component';
import { HydrostaticFirmsComponent } from './hydrostatic-firms/hydrostatic-firms.component';
import { StateWaiverComponent } from './state-waiver/state-waiver.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { PipelineDataComponent } from './pipeline-data/pipeline-data.component';
import { AdminPrivilegeComponent } from './admin-privilege/admin-privilege.component';
import { Title } from '@angular/platform-browser';
import { PendingUsersComponent } from './pending-users/pending-users.component';
import { UserAddingComponent } from './user-adding/user-adding.component';
import { ComplianceComponent } from './compliance/compliance.component';
import { DataRequestComponent } from './data-request/data-request.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { TrackComponent } from './track/track.component';
import { DataRequestAnswerComponent } from './data-request-answer/data-request-answer.component';
import { DataRequestQuestionComponent } from './data-request-question/data-request-question.component';
import { NotificationComponent } from './notification/notification.component';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { NotificationViewComponent } from './notification-view/notification-view.component';


const routes: Routes = [
  {


    path:"",
    children:[
      {path:"home/home",title:"Home",component:HomePageComponent},
      {path:"home/home2",title:"Home",component:HomePage2Component},
      {path:"home/home3",title:"Home",component:HomePage3Component},
      {path:"home/statistics",title:"Program Status",component: StatisticsComponent},
      {path:"dashboard/pipeline",title:"Trends",component: PipelineDataComponent},
      {path:"dashboard/hydrostatic",title:"Trends",component: HydrostaticFirmsComponent},
      {path:"dashboard/admin",title:"Trends",component: AdminDashboardComponent},
      { path: 'user/edit/:id',title:"Edit User", component: UserEditComponent },
      { path: 'user/add/:id',title:"Add User", component: UserAddComponent }, 
      { path: 'user/UserAdd',title:"Add User", component: UserAddingComponent },
      { path: 'user/dashboard',title:"User Dashboard", component: UserDashboardComponent },
      { path: 'admin/privileges',title:"Privilege", component: AdminPrivilegeComponent },
      { path: 'admin/pending', title:"Pending Users", component: PendingUsersComponent },
      
      
      { path: 'dashboard/state-waiver',title:"State Waiver Dashboard", component: StateWaiverComponent },
      { path: 'stateWaiver/complaince', title:"Compliance", component: ComplianceComponent },
      { path: 'stateWaiver/datarequest', title:"Data Request", component: DataRequestComponent },
      { path: 'stateWaiver/evaluation', title:"Evaluation", component: EvaluationComponent },
      { path: 'stateWaiver/dataRequest/answer/:id/:question', title:"Data Request", component: DataRequestAnswerComponent },
      { path: 'stateWaiver/dataRequest/question', title:"Data Request", component: DataRequestQuestionComponent },
      { path: 'stateWaiver/notification', title:"Notification", component: NotificationComponent },
      { path: 'stateWaiver/notification/view', title:"Notification View", component: NotificationViewComponent },


      { path: 'activityLog', title:"Activity log", component: ActivityLogComponent }




    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],

exports: [RouterModule]
})
export class DashboardsRoutingModule { }
