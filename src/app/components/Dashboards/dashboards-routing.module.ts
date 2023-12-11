import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsComponent } from './Program-Status/statistics/statistics.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PipelineDataComponent } from './pipeline-data/pipeline-data.component';
import { AdminDashboardComponent } from './admin-dashbaord/admin-dashbaord.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserAddComponent } from './user-add/user-add.component';
import { HydrostaticFirmsComponent } from './hydrostatic-firms/hydrostatic-firms.component';
import { StateWaiverComponent } from './state-waiver/state-waiver.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  {


    path:"",
    children:[
      {path:"home/home",title:"Home",component:HomePageComponent},
      {path:"home/statistics",title:"Program Status",component: StatisticsComponent},
      {path:"dashboard/pipeline",title:"Trends",component: PipelineDataComponent},
      {path:"dashboard/hydrostatic",title:"Trends",component: HydrostaticFirmsComponent},
      {path:"dashboard/admin",title:"Trends",component: AdminDashboardComponent},
      { path: 'user/edit/:id',title:"Edit User", component: UserEditComponent },
      { path: 'user/add',title:"Add User", component: UserAddComponent },
      { path: 'dashboard/state-waiver',title:"Add User", component: StateWaiverComponent },
      { path: 'user/dashboard',title:"Add User", component: UserDashboardComponent },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],

exports: [RouterModule]
})
export class DashboardsRoutingModule { }
