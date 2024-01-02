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
      { path: 'user/add',title:"Add User", component: UserAddComponent },
      { path: 'dashboard/state-waiver',title:"Add User", component: StateWaiverComponent },
      { path: 'user/dashboard',title:"Add User", component: UserDashboardComponent },
      { path: 'admin/privileges',title:"Privilege", component: AdminPrivilegeComponent },
      { path: 'admin/pending', title:"Pending Users", component: PendingUsersComponent }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],

exports: [RouterModule]
})
export class DashboardsRoutingModule { }
